import React from "react";
import { Body, Button, Card, ComingSoon, Header, Navbar } from "@components";
import { UliranA, UliranC, UliranE } from "@components/uliran";

export const SponsorSponsorship = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Card
          preset="light"
          className="flex justify-center mobile:w-4/5 tablet:w-11/12 mobile:h-[350px] tablet:h-[290px] relative"
        >
          <Header
            preset="h3"
            className="text-center tablet:text-[24px] desktop:text-[30px]"
          >
            Sponsor
          </Header>
          {/* ULIRAN DESKTOP */}
          <div className="mobile:invisible table:invisible desktop:visible absolute">
            <UliranA />
          </div>
          {/* ULIRAN TABLET */}
          <div className="mobile:invisible tablet:visible desktop:invisible absolute right-8 top-0">
            <UliranC />
          </div>
          {/* ULIRAN MOBILE */}
          <div className="flex justify-center">
            <div className="mobile:visible tablet:invisible desktop:invisible absolute bottom-0 pb-10">
              <UliranE />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
