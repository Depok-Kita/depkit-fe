import React from "react";
import { Card, Header } from "@components";
import { SPONSORS } from "@constants";
import { Partnership } from "@models";
import UliranA from "@images/uliran-a.svg";
import UliranC from "@images/uliran-c.svg";
import UliranE from "@images/uliran-e.svg";

export const SponsorSponsorship = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Card
          preset="light"
          className="flex justify-center mobile:w-4/5 tablet:w-11/12 desktop:w-5/6 mobile:h-[335px] tablet:h-[290px] desktop:h-[370px] relative"
        >
          <div>
            <Header
              preset="h3"
              className="text-center tablet:text-[24px] desktop:text-[30px]"
            >
              Sponsor
            </Header>
          </div>

          {/* LETAKAN SPONSOR DI SINI */}
          {/* MEDIUM , SMALL, EXTRA SMALL */}
          <div className="py-5 flex flex-col gap-3 items-center">
            {SPONSORS.map((sponsor: Partnership) => (
              <div className="flex gap-2" key={sponsor.size}>
                {sponsor.logos.map((Logo: any, index: number) => (
                  <Logo
                    key={index}
                    className={`${
                      sponsor.size == "large"
                        ? "desktop:w-48 tablet:w-36 mobile:w-28"
                        : sponsor.size == "medium"
                        ? "desktop:w-28 tablet:w-16 mobile:w-14"
                        : "desktop:w-16 tablet:w-12 mobile:w-10"
                    } h-full`}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* ULIRAN DESKTOP */}
          <div className="mobile:invisible table:invisible desktop:visible absolute right-12 top-0">
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
