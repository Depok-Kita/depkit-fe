import React, { createElement } from "react";
import { Card, Header } from "@components";

import UliranB from "@images/uliran-b.svg";
import UliranD from "@images/uliran-d.svg";
import UliranF from "@images/uliran-f.svg";
import { MEDPARS } from "@constants";
import { Partnership } from "@models";

export const SponsorMediaPartner = () => {
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
              className="text-center tablet:scale-100 tablet:text-[24px] desktop:text-[30px]"
            >
              Media Partner
            </Header>
          </div>

          {/* LETAKAN MEDIA PARTNER DI SINI */}
          {/* MEDIUM , SMALL, EXTRA SMALL */}
          <div className="py-5 flex flex-col gap-3 items-center">
            {MEDPARS.map((medpar: Partnership) => (
              <div className="flex flex-wrap gap-2 ml-28" key={medpar.size}>
                {medpar.logos.map((Logo: any, index: number) => (
                  <Logo
                    key={index}
                    className={`${
                      medpar.size == "large"
                        ? "w-48 "
                        : medpar.size == "medium"
                        ? "w-24"
                        : "w-16"
                    } h-full`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* ULIRAN DESKTOP */}
          <div className="mobile:invisible table:invisible desktop:visible absolute left-12 top-0">
            <UliranB />
          </div>
          {/* ULIRAN TABLET */}
          <div className="mobile:invisible tablet:visible desktop:invisible absolute left-8 top-0">
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
