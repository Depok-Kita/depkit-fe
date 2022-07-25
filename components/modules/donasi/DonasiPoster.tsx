import { Body, Header, Button } from "@components";
import React from "react";
import poster from "@images/donation-poster.jpg";
import Image from "next/image";
import { Divider } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { DonasiTransfer } from "./DonasiTransfer";
import { useWindowSize } from "@hooks";
import DonationAccent from "@images/donation-accent-1.svg";
import DonationPosterDecoration from "@images/donation-poster-decoration.svg";

export const DonasiPoster = () => {
  const { width } = useWindowSize();
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-4 tablet:gap-[34px] px-8 pt-14 tablet:px-20 tablet:pt-28 desktop:px-[380px] desktop:py-20 bg-powder-light"
      id="donation-poster"
    >
      <DonationAccent className="absolute -top-[15px] tablet:top-0 right-0 w-44 tablet:w-80 cursor-pointer" />
      <div className="flex flex-col gap-[11px] tablet:gap-6 desktop:gap-8 justify-center items-center">
        <Header
          preset={width >= 1280 ? "h2" : width >= 768 ? "h3" : "h6"}
          className="text-denim-dark text-center"
        >
          [ OPEN DONATION DEPOK KITA 2022 ]
        </Header>
        <div className="relative w-[90%] tablet:w-[70%] desktop:w-[40%] desktop:mt-7">
          <DonationPosterDecoration className="absolute -left-7 -top-7 hidden desktop:block" />
          <Image
            src={poster}
            alt="Open Donation"
            className="rounded-3xl"
            layout="responsive"
          />
        </div>
        <Header
          preset={width >= 1280 ? "h2" : width >= 768 ? "h4" : "h6"}
          className="text-denim-dark text-center"
        >
          Halo Sobat Depkit!
        </Header>
        <Body
          preset={width >= 1280 ? "p1" : width >= 768 ? "p2" : "p3"}
          className="text-denim-dark"
        >
          Melihat situasi dan kondisi di RT 05,06,07 RW 19 Kampung Lio, Depok
          yang mengalami kesulitan berupa masalah kesehatan dan pendidikan yang
          layak serta pemenuhan kebutuhan sehari-hari.
        </Body>
        <Body
          preset={width >= 1280 ? "p1" : width >= 768 ? "p2" : "p3"}
          className="text-denim-dark"
        >
          Maka dari itu, Depok Kita 2022 hadir menjadi jembatan bagi warga
          kampung Lio yang membutuhkan demi terciptanya kehidupan masyarakat
          yang lebih baik.
        </Body>
      </div>
      <Divider
        borderColor={"#88BFE8"}
        borderWidth={width >= 1280 ? 2 : 1}
        bgColor={"#88BFE8"}
      />
      <div className="space-y-[11px] desktop:space-y-10 tablet:space-y-6">
        <Body
          preset={width >= 1280 ? "p1" : width >= 768 ? "p2" : "p3"}
          className="text-denim-dark"
        >
          Demi terwujudnya hal tersebut, kami mengajak seluruh IKM Universitas
          Indonesia serta masyarakat umum untuk turut ikut serta dalam “Gerakan
          membantu Kampung Lio dimulai dari Rp 10.000” melalui :
        </Body>
        <Button
          preset="primaryDark"
          rightIcon={<ChevronRightIcon width={20} />}
          className="mx-auto scale-[.7] tablet:scale-100 w-max"
          onClick={() => {
            window.open("https://kitabisa.com/campaign/donasiuntukkampunglio");
          }}
        >
          Donasi untuk Kampung Lio
        </Button>
      </div>
      <Divider
        borderColor={"#88BFE8"}
        borderWidth={width >= 1280 ? 2 : 1}
        bgColor={"#88BFE8"}
      />
      <div className="space-y-[11px] tablet:space-y-6 desktop:space-y-10">
        <Body
          preset={width >= 1280 ? "p1" : width >= 768 ? "p2" : "p3"}
          className="text-denim-dark"
        >
          Apabila ingin berdonasi secara personal, kami melampirkan proposal
          donasi Depok Kita 2022 di
        </Body>
        <Button
          preset="primaryDark"
          rightIcon={<ChevronRightIcon width={20} />}
          className="mx-auto scale-[.7] tablet:scale-100 w-max"
          onClick={() => {
            window.open("https://bit.ly/ProposalDonasiDepkit2022");
          }}
        >
          Proposal Donasi Depok Kita 2022
        </Button>
        <Body
          preset={width >= 1280 ? "p1" : width >= 768 ? "p2" : "p3"}
          className="text-denim-dark"
        >
          Donasi dapat disampaikan melalui :
        </Body>
        <DonasiTransfer />
      </div>
      <Divider
        borderColor={"#88BFE8"}
        borderWidth={width >= 1280 ? 2 : 1}
        bgColor={"#88BFE8"}
        className="mt-4"
      />
    </div>
  );
};
