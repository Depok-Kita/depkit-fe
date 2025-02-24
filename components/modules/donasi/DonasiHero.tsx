import React from "react";
import HeroImg from "@images/donation-hero-illustration.svg";
import DonationAccent from "@images/donation-accent-1.svg";
import { Header, Button, useWindowSize } from "@components";
import { ChevronRightIcon } from "@heroicons/react/outline";

export const DonasiHero = () => {
  const { width } = useWindowSize();
  return (
    <div className="relative bg-powder-light p-11 tablet:p-[13px] flex flex-col justify-center items-center min-h-screen tablet:gap-14 desktop:gap-40 desktop:flex-row-reverse">
      <HeroImg className="w-[350px] h-[350px] tablet:h-auto tablet:w-[450px] desktop:w-[600px]" />
      <div className="space-y-7 tablet:space-y-10">
        <div className="space-y-2 tablet:space-y-3">
          <Header
            preset={width < 768 ? "h3" : "h2"}
            className="text-denim-dark text-center desktop:text-left leading-[1.2]"
          >
            Open Donation
            <br />
            Starts from
          </Header>
          <Header
            preset={width < 768 ? "h2" : "h1"}
            className="text-cerulean text-center desktop:text-left leading-[1.2]"
          >
            Rp10.000!
          </Header>
        </div>
        <Button
          preset="primaryDark"
          rightIcon={<ChevronRightIcon width={20} />}
          className="mx-auto desktop:mx-0"
          onClick={() => {
            const offset =
              document.getElementById("donation-poster")?.offsetTop;
            window.scrollTo({
              top: offset === undefined ? offset : offset - 50,
              behavior: "smooth",
            });
          }}
        >
          Donasi Sekarang
        </Button>
        <DonationAccent className="absolute -bottom-[15px] tablet:bottom-0 left-0 w-44 tablet:w-80 cursor-pointer" />
      </div>
    </div>
  );
};
