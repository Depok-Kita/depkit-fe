import React from "react";
import type { NextPage } from "next";
import { Button } from "@components/button";

const Arutala: NextPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">Arutala</h1>
      <div className="flex flex-col">
        <h2 className="text-center text-2xl">Button</h2>
        <div className="flex justify-center items-center bg-totalwhite gap-4 p-6">
          <Button preset="primaryDark">Button</Button>
          <Button preset="primaryDark" disabled>
            Button
          </Button>
          <Button preset="secondaryLight">Button</Button>
          <Button preset="secondaryLight" disabled>
            Button
          </Button>
          <Button preset="tertiaryDark">Button</Button>
          <Button preset="tertiaryDark" disabled>
            Button
          </Button>
          <Button preset="linkDark">Button</Button>
          <Button preset="linkDark" disabled>
            Button
          </Button>
        </div>
        <div className="flex justify-center items-center bg-denim-dark gap-4 p-6">
          <Button preset="primaryLight">Button</Button>
          <Button preset="primaryLight" disabled>
            Button
          </Button>
          <Button preset="secondaryDark">Button</Button>
          <Button preset="secondaryDark" disabled>
            Button
          </Button>
          <Button preset="tertiaryLight">Button</Button>
          <Button preset="tertiaryLight" disabled>
            Button
          </Button>
          <Button preset="linkLight">Button</Button>
          <Button preset="linkLight" disabled>
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Arutala;
