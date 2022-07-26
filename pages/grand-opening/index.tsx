import type { NextPage } from "next";
import React from "react";
import {
  GrandOpeningHero,
  GrandOpeningTema,
  GrandOpeningSpeaker,
  GrandOpeningForm 
} from "@components";

const GrandOpening: NextPage = () => {
  return (
    <div className="">
      <GrandOpeningHero />
      <GrandOpeningTema />
      <GrandOpeningSpeaker />
      <GrandOpeningForm />
    </div>
  );
};

export default GrandOpening;
