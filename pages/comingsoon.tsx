import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { Header, Button } from "@components";
import Link from "next/link";

const ComingSoon: NextPage = () => {
  return (
    <div className="bg-powder-light min-h-screen flex justify-center items-center">
      <div className="flex flex-col max-w-[500px] justify-center gap-6">
        <Image
          src="/assets/images/coming-soon-asset.svg"
          alt="Coming Soon"
          width={500}
          height={222}
        />
        <div className="flex flex-col gap-[66px]">
          <Header preset="decorative" className="text-center">
            Coming Soon!
          </Header>
          <Link href={"/"} passHref>
            <Button preset="primaryDark" className="mx-auto scale-150">
              Kembali
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
