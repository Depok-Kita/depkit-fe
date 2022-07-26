import React from "react";
import axios from "axios";
import { Header, DonationCard, Card, Body, Button } from "@components";
import { InputField } from "@components/input-field";
import { Divider } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";

export const GrandOpeningForm = () => {
  return (
    <div className="bg-denim-light p-28">
      <form action="" method="post" className="">
        <div className="flex gap-10 justify-center">
          <div className="w-full space-y-[70px]">
            <div>
              <Header preset="h2" className="text-powder-light leading-none">
                Daftar
              </Header>
              <Header preset="h3" className="text-powder-light">
                Grand Opening X Talkshow
              </Header>
            </div>
            {/* <DonationCard /> */}
          </div>
          <div className="space-y-10 w-full text-totalwhite">
            <InputField
              type="text"
              placeholder="Masukkan Nama Lengkap Anda"
              label="Nama Lengkap*"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
            />
            <InputField
              type="text"
              placeholder="Masukkan Email Anda"
              label="Email*"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
            />
            <InputField
              type="text"
              placeholder="Masukkan Nomor WhatsApp Anda"
              label="Nomor WhatsApp*"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
            />
            <InputField
              type="text"
              placeholder="Masukkan ID Line Anda"
              label="ID Line"
              isDisabled={false}
              isError={false}
              errorMessage="errorMessage"
            />
          </div>
        </div>
        <Card preset="dark">
          <div className="flex flex-col gap-10">
            <div className="space-y-3">
              <Header preset="h4" className="text-powder-light">
                Kirim bukti donasi
              </Header>
              <Divider
                className=""
                backgroundColor="#88BFE8"
                borderWidth={1.5}
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
                preset="secondaryDark"
                className="w-full"
                rightIcon={<ChevronRightIcon className="w-5" />}
              >
                Pilih Foto
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};
