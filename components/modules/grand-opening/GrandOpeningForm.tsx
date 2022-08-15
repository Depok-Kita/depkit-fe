import { Body, Button, Card, HeaderResponsive, Toast } from "@components";
import { InputFieldFormik, SelectFieldFormik } from "@components/input-field";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useWindowSize } from "@hooks";
import { GrandOpening } from "@models";
import { isValidPhoneNumber } from "@utils";
import axios from "axios";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
const COUNTRY_CODE = "+62";

export const GrandOpeningForm = () => {
  const donationProveUpload = useRef<any>(null);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const windowSize = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const successToast = Toast({
    preset: "success",
    message: "Anda berhasil mendaftar!",
  });
  const errorToast = Toast({
    preset: "error",
    message: "Gagal melakukan pendaftaran!",
  });
  const errorConflictToast = Toast({
    preset: "error",
    message:
      "Gagal melakukan pendaftaran! Anda sudah pernah registrasi sebelumnya.",
  });
  const imageErrorToast = Toast({
    preset: "error",
    message: "Lampiran gambar gagal diunggah!",
  });
  const imageEmptyToast = Toast({
    preset: "error",
    message: "Mohon melampirkan bukti donasi!",
  });
  const initalValues: GrandOpening = {
    name: "",
    email: "",
    line: "",
    phone: COUNTRY_CODE,
    institution: "",
    otherInstitution: "",
    faculty: "",
    otherFaculty: "",
    transferFrom: "",
  };
  const TRANSFER_OPTIONS = [
    { label: "BCA", value: "BCA" },
    { label: "BRI", value: "BRI" },
    { label: "Gopay", value: "Gopay" },
  ];
  const FACULTY_OPTIONS = [
    { label: "Kedokteran", value: "Kedokteran" },
    { label: "Kedokteran Gigi", value: "Kedokteran Gigi" },
    { label: "Ilmu Keperawatan", value: "Ilmu Keperawatan" },
    { label: "Farmasi", value: "Farmasi" },
    {
      label: "Matematika dan Ilmu Pengetahuan Alam",
      value: "Matematika dan Ilmu Pengetahuan Alam",
    },
    { label: "Teknik", value: "Teknik" },
    { label: "Psikologi", value: "Psikologi" },
    { label: "Hukum", value: "Hukum" },
    { label: "Ekonomi dan Bisnis", value: "Ekonomi dan Bisnis" },
    { label: "Ilmu Pengetahuan Budaya", value: "Ilmu Pengetahuan Budaya" },
    { label: "Ilmu Komputer", value: "Ilmu Komputer" },
    { label: "Ilmu Administrasi", value: "Ilmu Administrasi" },
    { label: "Ilmu Sosial dan Politik", value: "Ilmu Sosial dan Politik" },
    { label: "Kesehatan Masyarakat", value: "Kesehatan Masyarakat" },
    { label: "Program Pendidikan Vokasi", value: "Program Pendidikan Vokasi" },
    { label: "Other...", value: "Other..." },
  ];

  const REQUIRED_ERROR_MSG = "Harus diisi!";
  const validate = (values: GrandOpening) => {
    let errors: FormikErrors<GrandOpening> = {};
    if (!values.name) {
      errors.name = REQUIRED_ERROR_MSG;
    }
    if (!values.email) {
      errors.email = REQUIRED_ERROR_MSG;
    }
    if (!values.phone) {
      errors.phone = REQUIRED_ERROR_MSG;
    } else if (!isValidPhoneNumber(values.phone)) {
      errors.phone = "Nomor telepon tidak valid. Gunakan format +628XXXXXXXX";
    }
    if (!values.institution) {
      errors.institution = REQUIRED_ERROR_MSG;
    }
    if (values.institution === "Other..." && !values.otherInstitution) {
      errors.otherInstitution = REQUIRED_ERROR_MSG;
    }
    if (!values.faculty) {
      errors.faculty = REQUIRED_ERROR_MSG;
    }
    if (values.faculty === "Other..." && !values.otherFaculty) {
      errors.otherFaculty = REQUIRED_ERROR_MSG;
    }
    if (!values.transferFrom) {
      errors.transferFrom = REQUIRED_ERROR_MSG;
    }
    if (!values.line) {
      errors.line = REQUIRED_ERROR_MSG;
    }
    return errors;
  };

  const showRegistrationResult = (responseStatusCode: number) => {
    if (responseStatusCode == 200) {
      onOpen();
      return successToast();
    }
    if (responseStatusCode == 500) {
      return errorConflictToast();
    }
    return errorToast();
  };

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i) as any);
    }
  };

  const submitImageHandler = async (image: any) => {
    const formData = new FormData();
    formData.append("files", image);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_STRAPI}/api/upload/`,
        formData
      );
      return response.data[0].id;
    } catch (err) {
      imageErrorToast();
    }
  };

  const handleSubmit = async (
    values: GrandOpening,
    helpers: FormikHelpers<GrandOpening>
  ) => {
    helpers.setSubmitting(true);
    if (image === null) {
      imageEmptyToast();
      helpers.setSubmitting(false);
      return;
    }
    const imageId = await submitImageHandler(image);
    if (imageId === undefined) {
      helpers.setSubmitting(false);
      console.log("imageId is undefined");
      return;
    }
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      institution:
        values.institution === "Other..."
          ? values.otherInstitution
          : values.institution,
      faculty:
        values.faculty === "Other..." ? values.otherFaculty : values.faculty,
      transferFrom: values.transferFrom,
      line: values.line,
      donationProve: imageId,
    };
    await axios
      .post("/api/grand-opening", {
        data: data,
      })
      .then((response) => {
        helpers.resetForm();
        setImage(null);
        setCreateObjectURL(null);
        showRegistrationResult(response.status);
      })
      .catch((err) => {
        showRegistrationResult(err.response.status);
      });
    helpers.setSubmitting(false);
  };

  return (
    <div
      className="bg-denim-light tablet:py-28 mobile:py-10"
      id="grand-opening-form"
    >
      <Formik
        initialValues={initalValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {(props: any) => (
          <Form className="space-y-10 desktop:max-w-[40%] tablet:max-w-[50%] mobile:max-w-[80%] mx-auto">
            <div className="flex flex-col gap-6 tablet:gap-5">
              <div className="w-full flex flex-col gap-[20px] col-span-5 justify-center desktop:text-left mobile:text-center">
                <div>
                  <HeaderResponsive
                    windowSize={windowSize}
                    preset="h5"
                    presetTablet="h4"
                    presetDesktop="h2"
                    className="text-powder-light leading-none"
                  >
                    Daftar
                  </HeaderResponsive>
                  <HeaderResponsive
                    preset="h5"
                    presetTablet="h4"
                    presetDesktop="h2"
                    windowSize={windowSize}
                    className="text-powder-light"
                  >
                    Grand Opening <span className="text-cerulean">X</span>{" "}
                    Talkshow
                  </HeaderResponsive>
                </div>
                {/* <div className="desktop:block mobile:hidden">
                  <DonationCard />
                </div> */}
              </div>
              <div className="flex flex-col gap-6 justify-end mb-8 w-full text-totalwhite col-span-3">
                <div className="bg-denim-dark mr-auto px-4 py-[10px] rounded-[12px]">
                  <Body preset="p2" className="text-danger-light">
                    * harus diisi
                  </Body>
                </div>
                <InputFieldFormik
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  label="Nama Lengkap"
                  isDisabled={false}
                  dark={true}
                  required={true}
                />
                <InputFieldFormik
                  type="email"
                  name="email"
                  placeholder="JaneDoe@gmail.com"
                  label="Email"
                  isDisabled={false}
                  dark={true}
                  required={true}
                />
                <InputFieldFormik
                  type="text"
                  name="phone"
                  placeholder="Masukkan Nomor WhatsApp Anda"
                  label="Nomor WhatsApp"
                  isDisabled={false}
                  dark={true}
                  required={true}
                />
                <div>
                  <SelectFieldFormik
                    name="institution"
                    placeholder="Pilih Asal Instansi Anda"
                    options={[
                      {
                        label: "Universitas Indonesia",
                        value: "Universitas Indonesia",
                      },
                      { label: "Other...", value: "Other..." },
                    ]}
                    label="Asal Instansi"
                    isDisabled={false}
                    dark={true}
                    required={true}
                  />
                  {props.values.institution === "Other..." && (
                    <InputFieldFormik
                      type="text"
                      name="otherInstitution"
                      placeholder="Masukkan Institusi Anda"
                      isDisabled={false}
                      dark={true}
                      required={props.values.institution === "Other..."}
                    />
                  )}
                </div>
                <div>
                  <SelectFieldFormik
                    name="faculty"
                    placeholder="Pilih Fakultas Anda"
                    label="Fakultas"
                    options={FACULTY_OPTIONS}
                    isDisabled={false}
                    dark={true}
                    required={true}
                  />
                  {props.values.faculty === "Other..." && (
                    <InputFieldFormik
                      type="text"
                      name="otherFaculty"
                      placeholder="Masukkan Fakultas Anda"
                      isDisabled={false}
                      dark={true}
                      required={props.values.faculty === "Other..."}
                    />
                  )}
                </div>
                <InputFieldFormik
                  type="text"
                  name="line"
                  placeholder="Masukkan ID Line Anda"
                  label="ID Line"
                  isDisabled={false}
                  dark={true}
                  required={true}
                />
              </div>
            </div>
            {/* <div className="desktop:hidden mobile:block">
              <DonationCard />
            </div> */}
            <Card preset="dark">
              <div className="flex flex-col gap-10 items-center w-full">
                <div className="flex flex-col gap-3">
                  <HeaderResponsive
                    preset="h6"
                    presetTablet="h5"
                    presetDesktop="h4"
                    windowSize={windowSize}
                    className="text-powder-light"
                  >
                    Kirim bukti donasi
                    <span className="text-danger-light">*</span>
                  </HeaderResponsive>
                  <div
                    className={"h-[4.5px] w-full bg-cerulean mt-2 mx-auto"}
                  ></div>
                  <Body
                    preset="p3"
                    className="text-powder-light desktop:text-[20px] tablet:text-[13.3px] mobile:text-[12px] font-light"
                  >
                    Haii, pembayaran ini bersifat donasi yaa, berapapun yang
                    kamu berikan akan sangat bermanfaat ! hasil donasi kamu akan
                    disalurkan kepada masyarakat Kampung Lio, Depok yang
                    membutuhkan. Yuk berdonasii!
                    <br />
                    <br />
                    <b>
                      BCA : 8720701881 a.n Nazwa Mauritsa Ayu
                      <br />
                      BRI : 086401030932530 a.n Dhafiyah Utah
                      <br />
                      Gopay : 085695371868 a.n Nazwa Mauritsa
                    </b>
                  </Body>
                  <SelectFieldFormik
                    name="transferFrom"
                    label="Transfer melalui"
                    options={TRANSFER_OPTIONS}
                    placeholder="Pilih"
                    required={true}
                    dark={true}
                    className="mt-4"
                  />
                </div>
                <div className="mr-auto">
                  <div>
                    <Button
                      type="button"
                      preset="secondaryDark"
                      className="w-max"
                      border={
                        Object.keys(props.touched).length !== 0 &&
                        image === null
                          ? "border-[#E53E3E] border-2"
                          : undefined
                      }
                      rightIcon={<ChevronRightIcon className="w-5" />}
                      onClick={() => {
                        donationProveUpload.current.click();
                      }}
                    >
                      {!!createObjectURL ? "Ubah Foto" : "Pilih Foto"}
                    </Button>
                    {Object.keys(props.touched).length !== 0 && image === null && (
                      <Body
                        preset="p3"
                        className="text-[#E53E3E] mt-3 font-light text-[14px]"
                      >
                        {REQUIRED_ERROR_MSG}
                      </Body>
                    )}
                    <input
                      hidden
                      type="file"
                      name="donationProve"
                      id="donationProve"
                      accept="image/*"
                      ref={donationProveUpload}
                      onChange={uploadToClient}
                    />
                  </div>
                </div>
                {createObjectURL && (
                  <div className="w-[50%]">
                    <Image
                      src={createObjectURL}
                      alt="Open Donation"
                      className="rounded-3xl "
                      layout="responsive"
                      objectFit="cover"
                      width={35}
                      height={35}
                    />
                  </div>
                )}
              </div>
            </Card>
            <Button
              type="submit"
              preset="primaryLight"
              className="mx-auto scale-125"
              disabled={props.isSubmitting}
            >
              {props.isSubmitting ? "Sedang Mendaftar..." : "Daftar"}
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size="lg"
              closeOnOverlayClick={false}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <HeaderResponsive
                    windowSize={windowSize}
                    preset="h5"
                    presetTablet="h5"
                    presetDesktop="h4"
                  >
                    Halo, Sobat DepKit !
                  </HeaderResponsive>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <HeaderResponsive
                    windowSize={windowSize}
                    preset="h7"
                    presetTablet="h6"
                    presetDesktop="h5"
                  >
                    Terima kasih ya sudah berpartisipasi dalam Talkshow Charity
                    Depok Kita UI 2022!<br></br>
                    <br></br> Setelah ini, untuk koordinasi lebih lanjut kamu
                    bisa bergabung di link berikut{" "}
                    <p className="text-cerulean">
                      <Link href="https://chat.whatsapp.com/LJ7Ni22qz5S9KXdBcfVpEm">
                        https://chat.whatsapp.com/LJ7Ni22qz5S9KXdBcfVpEm
                      </Link>
                    </p>
                  </HeaderResponsive>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Form>
        )}
      </Formik>
    </div>
  );
};
