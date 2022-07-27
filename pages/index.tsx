import type { NextPage } from "next";
import Head from "next/head";
import { DonationCard, Header } from "@components";
import {
  Carousel,
  DepkitProfile,
  Journal,
  NilaiSection,
  SectionTitle,
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
      <div className="bg-powder-light pb-32">
        <Carousel />
        <DepkitProfile />
        <Journal />
        <div className="px-[10%] py-8 text-center space-y-8">
          <div>
            <SectionTitle>Donasi</SectionTitle>
            <DonationCard />
          </div>
          <div>
            <SectionTitle>Nilai Kami</SectionTitle>
            <NilaiSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
