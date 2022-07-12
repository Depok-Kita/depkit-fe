import {
  DonasiContactPerson,
  DonasiDescription,
  DonasiHero,
  DonasiPoster,
  DonationCard,
} from "@components";
import type { NextPage } from "next";
import React from "react";
import DonationAccent from "@images/donation-accent-1.svg";

const Donasi: NextPage = () => {
  return (
    <div>
      <DonasiHero />
      <DonasiDescription className="hidden desktop:block" />
      <DonasiPoster />
      <div
        className="relative p-8 tablet:p-16 desktop:px-[380px] desktop:pt-0 bg-powder-light"
        id="donation-card"
      >
        <DonationAccent className="absolute -top-4 tablet:-top-0 right-0 w-44 tablet:w-80 z-0 desktop:hidden" />
        <div className="z-50 mt-12 mb-6 tablet:mb-28 desktop:mt-0 desktop:mb-0">
          <DonationCard />
        </div>
      </div>
      <DonasiContactPerson />
    </div>
  );
};

export default Donasi;
