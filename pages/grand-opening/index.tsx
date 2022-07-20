import type { NextPage } from "next";
import React from "react";
import {
  GrandOpeningHero,
  GrandOpeningTema,
  GrandOpeningSpeaker,
} from "@components";

const GrandOpening: NextPage = () => {
  return (
    <div className="">
      <GrandOpeningHero />
      <GrandOpeningTema />
      <GrandOpeningSpeaker />
    </div>
  );
};

export default GrandOpening;
