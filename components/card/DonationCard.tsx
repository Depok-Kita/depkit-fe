import axios from "axios";
import { useState, useEffect } from "react";
import { LoadingScreen, Header, Body, Button } from "@components";
import { KitaBisa } from "@models";
import DonationAccent from "@images/donation-accent.svg";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useWindowSize } from "@hooks";
export const DonationCard = () => {
  const { width } = useWindowSize();
  const [kitabisa, setKitaBisa] = useState<KitaBisa>();
  const [kitaBisaLoading, setKitaBisaLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/kitabisa").then((response) => {
      setKitaBisa(response.data);
      setKitaBisaLoading(false);
    });
  }, []);

  if (kitaBisaLoading) {
    // return <LoadingScreen className="w-screen h-screen" />;
    return <p>loading...</p>;
  }

  const rupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(number)
      .slice(0, -3);
  };
  const donationPercentage = kitabisa
    ? ((kitabisa.donation * 100) / kitabisa.donation_target).toFixed(2) + "%"
    : 0;

  return (
    <div className="w-full h-full bg-denim-dark rounded-3xl shadow-denim-light shadow-lg flex flex-col desktop:pb-10 tablet:pb-6 mobile:pb-3 ">
      <div className=" desktop:h-60 tablet:h-36 mobile:h-24  bg-totalwhite rounded-2xl tablet:mt-8 tablet:mx-8 desktop:mb-10 tablet:mb-5 mobile:mt-2 mobile:mx-2 mobile:mb-3 flex flex-col items-center gap-2 justify-center relative">
        <DonationAccent className="absolute mobile:right-5 tablet:right-20 w-auto h-full" />
        <Header
          preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h5"}
          className="text-denim-light"
        >
          Donasi Ditutup
        </Header>
        <div className="flex tablet:gap-4 mobile:gap-1">
          <div className="flex flex-col tablet:gap-4 mobile:gap-1 items-center">
            <Header
              preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h5"}
              className="text-black"
            >
              {kitabisa?.days_remaining}
            </Header>
            <Body
              preset={width >= 1280 ? "p2" : "p3"}
              className="text-black font-bold"
            >
              Hari
            </Body>
          </div>
          <Header
            preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h5"}
            className="text-black"
          >
            :
          </Header>
          <div className="flex flex-col tablet:gap-4 mobile:gap-1 items-center">
            <Header
              preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h5"}
              className="text-black"
            >
              13
            </Header>
            <Body
              preset={width >= 1280 ? "p2" : "p3"}
              className="text-black font-bold"
            >
              Jam
            </Body>
          </div>
          <Header
            preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h5"}
            className="text-black"
          >
            :
          </Header>

          <div className="flex flex-col tablet:gap-4 mobile:gap-1 items-center">
            <Header
              preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h5"}
              className="text-black"
            >
              14
            </Header>
            <Body
              preset={width >= 1280 ? "p2" : "p3"}
              className="text-black font-bold"
            >
              Menit
            </Body>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Header
          preset={width >= 1280 ? "h2" : width >= 768 ? "h3" : "h4"}
          className="text-totalwhite flex items-center gap-2"
        >
          {kitabisa ? rupiah(kitabisa.donation) : null}
          <span>
            <Body
              preset={width >= 1280 ? "p2" : "p3"}
              className="text-totalwhite desktop:mt-5 tablet:mt-3 mobile:mt-1"
            >
              terkumpul
            </Body>
          </span>
        </Header>
        <div className="w-full mt-5">
          <div className="tablet:mx-8 mobile:mx-2 h-7 bg-totalwhite rounded-full">
            <div
              className={`h-7 w-[${donationPercentage}] bg-cerulean rounded-full`}
            ></div>
          </div>
        </div>

        <Button
          preset="primaryLight"
          className="mt-7"
          rightIcon={<ChevronRightIcon className="fill-denim-light w-5 h-5 " />}
        >
          Donasi Sekarang
        </Button>
      </div>
    </div>
  );
};
