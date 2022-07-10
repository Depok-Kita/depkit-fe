import type { NextPage } from "next";
import Head from "next/head";
import { DonationCard, Header } from "@components";
import {
  Carousel,
  DepkitProfile,
  Journal,
  NilaiSection,
} from "@components/modules/landing";

/** Add space between content and page edge */
const ContentBox = () => {};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Depok Kita</title>
        <link rel="icon" href="/assets/images/depkit-logo-1.svg" />
      </Head>
      <div className="bg-powder-light">
        <Carousel />
        <DepkitProfile />
        <Journal />
        <div className="px-[10%] py-8">
          <DonationCard />
        </div>
        <NilaiSection />
      </div>
    </div>
  );
};

export default Home;
