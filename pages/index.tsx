import type { NextPage } from "next";
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

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-powder-light desktop:pb-32 tablet:pb-13 mobile:pb-8">
        <Carousel />
        <DepkitProfile />
        {/* <Journal /> */}
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
