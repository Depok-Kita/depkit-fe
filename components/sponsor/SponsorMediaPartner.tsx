import React from "react";
import { Body, Button, Card, ComingSoon, Header, Navbar } from "@components";
import { UliranB, UliranD, UliranF } from "@components/uliran";

export const SponsorMediaPartner = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Card
          preset="light"
          className="flex justify-center w-4/5 h-[350px] relative"
        >
          <Header
            preset="h3"
            className="text-center tablet:scale-100 tablet:text-[24px] desktop:text-[30px]"
          >
            Media Partner
          </Header>

          {/* ULIRAN DESKTOP */}
          <div className="mobile:invisible table:invisible desktop:visible absolute">
            <UliranB />
          </div>
          {/* ULIRAN TABLET */}
          <div className="mobile:invisible tablet:visible desktop:invisible absolute">
            <UliranD />
          </div>
          {/* ULIRAN MOBILE */}
          <div className="flex justify-center">
            <div className="mobile:visible tablet:invisible desktop:invisible absolute bottom-0 pb-10">
              <UliranF />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
