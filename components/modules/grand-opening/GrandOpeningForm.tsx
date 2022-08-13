import React, { useRef, useState } from "react";
import axios from "axios";
import {
  DonationCard,
  Card,
  Body,
  Button,
  Toast,
  HeaderResponsive,
} from "@components";
import { InputFieldFormik } from "@components/input-field";
import { Divider } from "@chakra-ui/react";
import { Formik, Form, FormikErrors, FormikHelpers } from "formik";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useWindowSize } from "@hooks";
import Image from "next/image";
import { GrandOpening } from "@models";
import { isValidPhoneNumber } from "@utils";

const COUNTRY_CODE = "+62";

export const GrandOpeningForm = () => {
  const donationProveUpload = useRef<any>(null);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const { width } = useWindowSize();
  const windowSize = useWindowSize();
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
  };

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
    if (!values.line) {
      errors.line = REQUIRED_ERROR_MSG;
    }
    return errors;
  };

  const showRegistrationResult = (responseStatusCode: number) => {
    if (responseStatusCode == 200) {
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
        `${process.env.NEXT_PUBLIC_API_STRAPI}api/upload/`,
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
    if (imageId === null) {
      helpers.setSubmitting(false);
      return;
    }
    const data = {
      ...values,
      donationProve: imageId,
    };
    await axios
      .post("/api/grand-opening", {
        data: data,
      })
      .then((response) => {
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
        {(props) => (
          <Form
            // encType="multipart/form-data"
            className="space-y-10 desktop:max-w-[70%] tablet:max-w-[90%] mobile:max-w-[80%] mx-auto"
          >
            <div className="tablet:grid grid-cols-8 desktop:gap-10 mobile:flex flex-col tablet:gap-0 mobile:gap-9">
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
                <div className="desktop:block mobile:hidden">
                  <DonationCard />
                </div>
              </div>
              <div className="flex flex-col desktop:gap-10 tablet:gap-9 mobile:gap-6 justify-end mb-8 w-full text-totalwhite col-span-3">
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
                  innerClassName="desktop:p-8 mobile:p-6"
                />
                <InputFieldFormik
                  type="text"
                  name="email"
                  placeholder="JaneDoe@gmail.com"
                  label="Email"
                  isDisabled={false}
                  dark={true}
                  required={true}
                  innerClassName="desktop:p-8 mobile:p-6"
                />
                <InputFieldFormik
                  type="text"
                  name="phone"
                  placeholder="Masukkan Nomor WhatsApp Anda"
                  label="Nomor WhatsApp"
                  isDisabled={false}
                  dark={true}
                  required={true}
                  innerClassName="desktop:p-8 mobile:p-6"
                />
                <InputFieldFormik
                  type="text"
                  name="line"
                  placeholder="Masukkan ID Line Anda"
                  label="ID Line"
                  isDisabled={false}
                  dark={true}
                  required={true}
                  innerClassName="desktop:p-8 mobile:p-6"
                />
              </div>
            </div>
            <div className="desktop:hidden mobile:block">
              <DonationCard />
            </div>
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
                  </HeaderResponsive>
                  <Divider
                    borderColor={"#88BFE8"}
                    bgColor={"#88BFE8"}
                    borderWidth={1.5}
                    width={
                      width >= 1280
                        ? width / 1.6
                        : width >= 768
                        ? width / 1.25
                        : "auto"
                    }
                  />
                  <Body
                    preset="p3"
                    className="text-powder-light desktop:text-[24px] tablet:text-[13.3px] mobile:text-[12px] font-light"
                  >
                    Pastikan file dalam bentuk png, jpg, atau jpeg.
                  </Body>
                </div>
                <div className="mr-auto">
                  <Button
                    type="button"
                    preset="secondaryDark"
                    className="w-full"
                    rightIcon={<ChevronRightIcon className="w-5" />}
                    onClick={() => {
                      donationProveUpload.current.click();
                    }}
                  >
                    {!!createObjectURL ? "Ubah Foto" : "Pilih Foto"}
                  </Button>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};
