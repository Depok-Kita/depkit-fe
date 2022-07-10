import React from "react";
import Image from "next/image";
import { Header, Button } from "@components";
import { useWindowSize } from "@hooks";

export const ComingSoon = () => {
  const { width } = useWindowSize();
  return (
    <div className="bg-powder-light min-h-screen flex justify-center items-center">
      <div className="flex flex-col max-w-[500px] justify-center gap-3 tablet:gap-6">
        <Image
          src="/assets/images/coming-soon-asset.svg"
          alt="Coming Soon"
          width={width >= 768 ? 500 : 260}
          height={width >= 768 ? 222 : 115}
        />
        <div className="flex flex-col gap-8 tablet:gap-10 desktop:gap-[66px]">
          <Header
            preset="h4"
            className="text-center tablet:scale-100 tablet:text-[52px] desktop:text-[64px]"
          >
            Coming Soon!
          </Header>
          <Button
            preset="primaryDark"
            className="mx-auto scale-100 tablet:scale-150"
            onClick={() => history.back()}
          >
            Kembali
          </Button>
        </div>
      </div>
    </div>
  );
};
