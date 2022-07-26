import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Header, DonationCard, Card, Body, Button, Toast } from "@components";
import { InputField } from "@components/input-field";
import { Divider } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useWindowSize } from "@hooks";
import Image from "next/image";

export const GrandOpeningForm = () => {
  const donationProveUpload = useRef<any>(null);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(false);
  const successToast = Toast({
    preset: "success",
    message: "Anda Berhasil Mendaftar!",
  });
  const errorToast = Toast({
    preset: "error",
    message: "Gagal Melakukan Pendaftaran!",
  });
  const imageErrorToast = Toast({
    preset: "error",
    message: "Lampiran Gambar Gagal Diunggah!",
  });

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const imageId = await submitImageHandler(image);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      line: e.target.line.value,
      donationProve: imageId,
      phone: e.target.phone.value,
    };
    console.log(data);
    await axios
      .post("/api/grand-opening", {
        data: data,
      })
      .then((response) => {
        console.log(response);
        successToast();
      })
      .catch((err) => {
        console.log(err.response.data.message);
        errorToast();
      });
    setIsLoading(false);
  };

  return (
    <div className="bg-denim-light py-28">
      <form
        encType="multipart/form-data"
        className="space-y-10 max-w-[70%] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-8 gap-10">
          <div className="w-full flex flex-col gap-[20px] col-span-5">
            <div>
              <Header preset="h2" className="text-powder-light leading-none">
                Daftar
              </Header>
              <Header preset="h3" className="text-powder-light">
                Grand Opening <span className="text-cerulean">X</span> Talkshow
              </Header>
            </div>
            <DonationCard />
          </div>
          <div className="flex flex-col gap-10 justify-end mb-8 w-full text-totalwhite col-span-3">
            <InputField
              type="text"
              name="name"
              placeholder="Masukkan Nama Lengkap Anda"
              label="Nama Lengkap"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
              dark={true}
              required={true}
              innerClassName="p-8"
            />
            <InputField
              type="text"
              name="email"
              placeholder="Masukkan Email Anda"
              label="Email"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
              dark={true}
              required={true}
              innerClassName="p-8"
            />
            <InputField
              type="text"
              name="phone"
              placeholder="Masukkan Nomor WhatsApp Anda"
              label="Nomor WhatsApp"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
              dark={true}
              required={true}
              innerClassName="p-8"
            />
            <InputField
              type="text"
              name="line"
              placeholder="Masukkan ID Line Anda"
              label="ID Line"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
              dark={true}
              innerClassName="p-8"
            />
          </div>
        </div>
        <Card preset="dark">
          <div className="flex flex-col gap-10 items-center w-full">
            <div className="flex flex-col gap-3">
              <Header preset="h4" className="text-powder-light">
                Kirim bukti donasi
              </Header>
              <Divider
                borderColor={"#88BFE8"}
                bgColor={"#88BFE8"}
                borderWidth={1.5}
                width={width > 768 ? width / 1.6 : "auto"}
              />
              <Body
                preset="p3"
                className="text-powder-light text-[24px] font-light"
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
                required
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
          preset="primaryLight"
          className="mx-auto scale-125"
          disabled={isLoading}
        >
          Daftar
        </Button>
      </form>
    </div>
  );
};
