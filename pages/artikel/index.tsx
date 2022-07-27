import React from "react";
import {
  ArtikelTitlePage,
  ArtikelTerbaru,
  ArtikelSemuaArtikel,
} from "@components";
import type { NextPage } from "next";

const Artikel: NextPage = () => {
  return (
    <div>
      {/* NAVBAR SPACE HEIGHT GAP  */}
      <div className="bg-powder-light h-[60px]"></div>
      <ArtikelTitlePage />
      <ArtikelTerbaru />
      <ArtikelSemuaArtikel />
    </div>
  );
};

export default Artikel;
