import { Body, Header, Button } from "@components";
import React from "react";
import poster from "@images/donation-poster.jpg";
import Image from "next/image";
import { Divider } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { DonasiTransfer } from "./DonasiTransfer";

export const DonasiPoster = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 bg-powder-light">
      <div className="flex flex-col gap-[11px] justify-center items-center">
        <Header preset="h6" className="text-denim-dark text-center">
          [ OPEN DONATION DEPOK KITA 2022 ]
        </Header>
        <div className="w-[75%]">
          <Image
            src={poster}
            alt="Open Donation"
            className="rounded-3xl"
            layout="responsive"
          />
        </div>
        <Header preset={"h6"} className="text-denim-dark text-center">
          Halo Sobat Depkit!
        </Header>
        <Body preset={"p3"} className="text-denim-dark">
          Melihat situasi dan kondisi di RT 05,06,07 RW 19 Kampung Lio, Depok
          yang mengalami kesulitan berupa masalah kesehatan dan pendidikan yang
          layak serta pemenuhan kebutuhan sehari-hari. Maka dari itu, Depok Kita
          2022 hadir menjadi jembatan bagi warga kampung Lio yang membutuhkan
          demi terciptanya kehidupan masyarakat yang lebih baik.
        </Body>
      </div>
      <Divider borderColor={"#88BFE8"} borderWidth={1} bgColor={"#88BFE8"} />
      <div className="space-y-[11px]">
        <Body preset={"p3"}>
          Demi terwujudnya hal tersebut, kami mengajak seluruh IKM Universitas
          Indonesia serta masyarakat umum untuk turut ikut serta dalam “Gerakan
          membantu Kampung Lio dimulai dari Rp 10.000” melalui :
        </Body>
        <Button
          preset="primaryDark"
          rightIcon={<ChevronRightIcon width={20} />}
          className="mx-auto scale-[.7] w-max"
          onClick={() => {
            window.open("https://kitabisa.com/campaign/donasiuntukkampunglio");
          }}
        >
          Donasi untuk Kampung Lio
        </Button>
      </div>
      <Divider borderColor={"#88BFE8"} borderWidth={1} bgColor={"#88BFE8"} />
      <div className="space-y-[11px]">
        <Body preset={"p3"}>
          Apabila ingin berdonasi secara personal, kami melampirkan proposal
          donasi Depok Kita 2022 di
        </Body>
        <Button
          preset="primaryDark"
          rightIcon={<ChevronRightIcon width={20} />}
          className="mx-auto scale-[.7] w-max"
          onClick={() => {
            window.open("https://kitabisa.com/campaign/donasiuntukkampunglio");
          }}
        >
          Proposal Donasi Depok Kita 2022
        </Button>
        <Body preset={"p3"}>Donasi dapat disampaikan melalui :</Body>
        <DonasiTransfer />
      </div>
    </div>
  );
};
