import React from "react";
import HeroImg from "@images/donation-hero-illustration.svg";
import DonationAccent from "@images/donation-accent-1.svg";
import { Header, Button } from "@components";
import { ArrowDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const DonasiHero = () => {
  return (
    <div className="relative bg-powder-light p-[13px] flex flex-col justify-center items-center min-h-screen tablet:gap-14">
      <HeroImg className="w-[350px] tablet:w-[550px]" />
      <div className="space-y-7 tablet:space-y-10">
        <div className="space-y-2 tablet:space-y-3">
          <Header
            preset="h2"
            className="text-denim-dark text-center leading-[1.2]"
          >
            Open Donation
            <br />
            Starts from
          </Header>
          <Header
            preset="h1"
            className="text-cerulean text-center leading-[1.2]"
          >
            Rp10.000!
          </Header>
        </div>
        <Button
          preset="primaryDark"
          rightIcon={<ChevronRightIcon width={20} />}
          className="mx-auto"
          onClick={() => {
            window.open("https://kitabisa.com/campaign/donasiuntukkampunglio");
          }}
        >
          Donasi Sekarang
        </Button>
        <ArrowDownIcon
          className="w-8 tablet:w-12 text-cerulean animate-bounce mx-auto cursor-pointer"
          onClick={() => {
            const offset =
              document.getElementById("donation-poster")?.offsetTop;
            window.scrollTo({
              top: offset === undefined ? offset : offset - 50,
              behavior: "smooth",
            });
          }}
        />
        <DonationAccent className="absolute -bottom-4 tablet:bottom-0 left-0 w-44 tablet:w-80 cursor-pointer" />
      </div>
    </div>
  );
};
