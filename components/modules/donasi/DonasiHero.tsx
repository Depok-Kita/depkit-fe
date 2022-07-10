import React from "react";
import HeroImg from "@images/donation-hero-illustration.svg";
import DonationAccent from "@images/donation-accent-1.svg";
import { Header, Button } from "@components";
import { ArrowDownIcon, ChevronRightIcon } from "@heroicons/react/outline";

export const DonasiHero = () => {
  return (
    <div className="relative bg-powder-light p-[13px] flex flex-col justify-center items-center min-h-screen -z-10">
      <HeroImg className="w-[350px]" />
      <div className="space-y-7">
        <div className="space-y-2">
          <Header
            preset="h3"
            className="text-denim-dark text-center leading-[1.2]"
          >
            Open Donation
            <br />
            Starts from
          </Header>
          <Header
            preset="h2"
            className="text-cerulean text-center leading-[1.2]"
          >
            Rp10.000!
          </Header>
        </div>
        <Button
          preset="primaryDark"
          rightIcon={<ChevronRightIcon width={18} />}
          className="mx-auto"
        >
          Donasi Sekarang
        </Button>
        <ArrowDownIcon className="w-8 text-cerulean animate-bounce mx-auto cursor-pointer" />
      </div>
      <DonationAccent className="absolute -bottom-4 left-0 w-44 -z-0" />
    </div>
  );
};
