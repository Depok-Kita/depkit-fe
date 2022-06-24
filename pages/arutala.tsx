import React from "react";
import type { NextPage } from "next";
import { Header, Button } from "@components";
import Link from "next/link";

const Arutala: NextPage = () => {
  return (
    <div className="flex flex-col gap-12 p-10 bg-powder min-h-screen">
      <Header preset="decorative" className="text-center">
        ARUTALA
      </Header>
      <div className="flex flex-col bg-totalwhite max-w-[80%] mx-auto rounded-3xl p-10 shadow-lg shadow-[#ADD1E2]">
        <Header preset="h2" className="text-center">
          Button
        </Header>
        <div className="flex justify-center items-center gap-8 p-3 mx-auto">
          <Header preset="h5" className="-ml-4">
            Primary
          </Header>
          <Header preset="h5" className="-ml-1">
            Secondary
          </Header>
          <Header preset="h5" className="-ml-2">
            Tertiary
          </Header>
          <Header preset="h5" className="ml-4">
            Link
          </Header>
        </div>
        <div className="flex justify-center items-center gap-4 p-6 mx-auto">
          <Button preset="primaryDark">Button</Button>
          <Button preset="secondaryLight">Button</Button>
          <Button preset="tertiaryDark">Button</Button>
          <Link href={"https://www.google.com"} passHref>
            <Button preset="linkDark">Button</Button>
          </Link>
        </div>

        <div className="flex justify-center items-center bg-denim-dark gap-4 p-6 min-w-[75%] mx-auto rounded-3xl">
          <Button preset="primaryLight">Button</Button>
          <Button preset="secondaryDark">Button</Button>
          <Button preset="tertiaryLight">Button</Button>
          <Link href={"https://www.google.com"} passHref>
            <Button preset="linkLight">Button</Button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 p-6 mx-auto">
          <Button preset="primaryDark" disabled>
            Button
          </Button>
          <Button preset="secondaryLight" disabled>
            Button
          </Button>
          <Button preset="tertiaryDark" disabled>
            Button
          </Button>
          <Link href={"https://www.google.com"} passHref>
            <Button preset="linkDark" disabled>
              Button
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Arutala;
