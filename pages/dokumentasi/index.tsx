import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dokumentasi } from "@models";
import { DokumentasiHero, DokumentasiList, LoadingScreen } from "@components";
const DokumentasiPage: NextPage = () => {
  const [dokumentasi, setDokumentasi] = useState<Dokumentasi[]>();
  const [dokumentasiLoading, setDokumentasiLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/dokumentasi").then((response) => {
      setDokumentasi(response.data);
      setDokumentasiLoading(false);
    });
  }, []);

  if (dokumentasiLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <DokumentasiHero />
      <DokumentasiList dokumentasi={dokumentasi} />
    </div>
  );
};

export default DokumentasiPage;
