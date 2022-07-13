import {
  DonasiContactPerson,
  DonasiDescription,
  DonasiHero,
  DonasiPoster,
  DonationCard,
} from "@components";
import type { NextPage } from "next";
import React from "react";

const Donasi: NextPage = () => {
  return (
    <div>
      <DonasiHero />
      <DonasiDescription />
      <DonasiPoster />
      <div className="p-8 tablet:px-20 tablet:py-14 desktop:px-[380px] desktop:pt-0 bg-powder-light">
        <DonationCard />
      </div>
      <DonasiContactPerson />
    </div>
  );
};

export default Donasi;
