import React from "react";
import { Body, Button, Card, ComingSoon, Header, Navbar } from "@components";
import { UliranB, UliranD, UliranF } from "@components/uliran";

export const SponsorMediaPartner = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Card preset="light" className="flex justify-center w-4/5">
          <Header
            preset="h4"
            className="text-center tablet:scale-100 tablet:text-[24px] desktop:text-[30px]"
          >
            Media Partner
          </Header>
          <UliranB />
          <UliranD />
          <UliranF />
        </Card>
      </div>
    </div>
  );
};
