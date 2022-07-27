import type { NextPage } from "next";
import Head from "next/head";
import { DonationCard, Header } from "@components";
import {
  Carousel,
  DepkitProfile,
  Journal,
  NilaiSection,
  SectionTitle,
  TemaDepkit,
} from "@components/modules/landing";
import "swiper/css";

/** Add space between content and page edge */
const ContentBox = () => {};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Depok Kita</title>
        <link rel="icon" href="/assets/images/depkit-logo-1.svg" />
      </Head>
      <div className="bg-powder-light desktop:pb-32 tablet:pb-13 mobile:pb-8">
        <Carousel />
        <DepkitProfile />
        <Journal />
        <div className=" py-8 text-center space-y-8">
          <div className="px-[10%] desktop:pb-24 tablet:pb-13 mobile:pb-8">
            <SectionTitle>Donasi</SectionTitle>
            <DonationCard />
          </div>
          <div className="desktop:pb-24 ">
            <TemaDepkit />
          </div>

          <div className="px-[10%]">
            <SectionTitle>Nilai Kami</SectionTitle>
            <NilaiSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
