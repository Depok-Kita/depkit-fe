import type { NextPage } from "next";
import { DokumentasiHero, DokumentasiList } from "@components";
const DokumentasiPage: NextPage = () => {
  return (
    <div>
      <DokumentasiHero />
      <DokumentasiList />
    </div>
  );
};

export default DokumentasiPage;
