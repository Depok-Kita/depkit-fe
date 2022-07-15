import React from "react";
import { Body, Button, Card, ComingSoon, Header, Navbar } from "@components";
import { UliranA, UliranC, UliranE } from "@components/uliran";

export const SponsorSponsorship = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Card preset="light" className="flex justify-center w-4/5">
          <Header
            preset="h4"
            className="text-center tablet:text-[24px] desktop:text-[30px]"
          >
            Sponsor
          </Header>
          <UliranA />
          <UliranC />
          <UliranE />
        </Card>
      </div>
    </div>
  );
};
