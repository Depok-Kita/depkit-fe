import { DonasiHero, DonasiPoster, DonationCard } from "@components";
import type { NextPage } from "next";
import React from "react";
import DonationAccent from "@images/donation-accent-1.svg";

const Donasi: NextPage = () => {
  return (
    <div className="">
      <DonasiHero />
      <DonasiPoster />
      <div className="relative p-8 -z-10 bg-powder-light">
        <div className="z-50 mt-12">
          <DonationCard />
        </div>
        <DonationAccent className="absolute -top-4 right-0 w-44 z-0" />
      </div>
    </div>
  );
};

export default Donasi;
