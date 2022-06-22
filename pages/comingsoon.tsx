import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

const ComingSoon: NextPage = () => {
  return (
    <div className="bg-secondary-lightpowder min-h-screen flex justify-center items-center">
      <div className="flex flex-col max-w-[500px] justify-center gap-6">
        <img src="/assets/coming-soon-asset.svg" alt="" />
        <div className="flex flex-col gap-[66px]">
          <p className="text-center text-[64px] font-bold">Coming Soon!</p>
          <Button colorScheme="teal" className="mx-auto">
            Kembali
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
