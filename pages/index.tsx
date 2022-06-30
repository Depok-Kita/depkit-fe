import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "@components";

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
        <div className="px-[10%] py-10 tablet:py-20"></div>
        <div className="bg-denim-dark py-20 text-white text-center">
          <Header preset="h2">Beragam Aksi Untuk Wujudkan Asa</Header>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
