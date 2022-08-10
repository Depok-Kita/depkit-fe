import axios from "axios";
import { useState, useEffect } from "react";
import { Header, Body, Button } from "@components";
import { KitaBisa } from "@models";
import { Skeleton } from "@chakra-ui/react";
import DonationAccent from "@images/donation-accent.svg";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useWindowSize } from "@hooks";
import Link from "next/link";

export const DonationCard = () => {
  const { width } = useWindowSize();
  const [kitabisa, setKitaBisa] = useState<KitaBisa>();
  const [kitaBisaLoading, setKitaBisaLoading] = useState(false);
  useEffect(() => {
    axios.get("/api/kitabisa").then((response) => {
      setKitaBisa(response.data);
      setKitaBisaLoading(true);
    });
  }, []);

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
    : "0%";

  const today: any = new Date();
  const end: any = new Date("2022-11-19");
  const diffMs = end - today; // milliseconds between now & Christmas
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

  return (
    <div className="w-full h-full bg-denim-dark rounded-[9.5px] tablet:rounded-[20px] desktop:rounded-3xl shadow-denim-light shadow-lg flex flex-col desktop:pb-10 tablet:pb-6 mobile:pb-3 ">
      <div className="desktop:h-60 tablet:h-36 mobile:h-24  bg-totalwhite  tablet:mt-8 tablet:mx-8 desktop:mb-10 tablet:mb-5 mobile:mt-2 mobile:mx-2 mobile:mb-3 flex flex-col items-center gap-2 justify-center relative rounded-[5.5px] tablet:rounded-[11.6px] desktop:rounded-2xl">
        <Skeleton
          isLoaded={kitaBisaLoading}
          rounded={width >= 1280 ? "2xl" : width >= 768 ? "11.6px" : "5.5px"}
          className="h-full flex flex-col items-center justify-center w-full"
        >
          <DonationAccent className="absolute mobile:right-5 tablet:right-20 w-auto h-full" />
          <Header
            preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h6"}
            className="text-denim-light tablet:mx-0 mobile:mx-14 text-center"
          >
            Donasi ditutup dalam
          </Header>
          <div className="flex tablet:gap-4 mobile:gap-1">
            <div className="flex flex-col tablet:gap-4 mobile:gap-1 items-center">
              <Header
                preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h6"}
                className="text-black"
              >
                {diffDays}
              </Header>
              <Body
                preset={width >= 1280 ? "p2" : "p3"}
                className="text-black font-bold"
              >
                Hari
              </Body>
            </div>
            <Header
              preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h6"}
              className="text-black"
            >
              :
            </Header>
            <div className="flex flex-col tablet:gap-4 mobile:gap-1 items-center">
              <Header
                preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h6"}
                className="text-black"
              >
                {diffHrs}
              </Header>
              <Body
                preset={width >= 1280 ? "p2" : "p3"}
                className="text-black font-bold"
              >
                Jam
              </Body>
            </div>
            <Header
              preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h6"}
              className="text-black"
            >
              :
            </Header>

            <div className="flex flex-col tablet:gap-4 mobile:gap-1 items-center">
              <Header
                preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h6"}
                className="text-black"
              >
                {diffMins}
              </Header>
              <Body
                preset={width >= 1280 ? "p2" : "p3"}
                className="text-black font-bold"
              >
                Menit
              </Body>
            </div>
          </div>
        </Skeleton>{" "}
      </div>

      <div className="flex flex-col items-center">
        <Skeleton
          isLoaded={kitaBisaLoading}
          className="text-center"
          rounded="full"
        >
          <Header
            preset={width >= 1280 ? "h2" : width >= 768 ? "h3" : "h5"}
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
        </Skeleton>

        <div className="w-full mt-5">
          <div className="tablet:mx-8 mobile:mx-2 h-7 bg-totalwhite rounded-full">
            <Skeleton isLoaded={kitaBisaLoading} rounded="full">
              <div
                className={`h-7 bg-cerulean rounded-full`}
                style={{ width: `${donationPercentage}` }}
              ></div>
            </Skeleton>
          </div>
        </div>
        <Skeleton
          isLoaded={kitaBisaLoading}
          rounded="full"
          className="mt-7 h-16"
        >
          <Link href={"https://kitabisa.com/campaign/donasiuntukkampunglio"}>
            <Button
              preset="primaryLight"
              rightIcon={
                <ChevronRightIcon className="fill-denim-light w-5 h-5 " />
              }
            >
              Donasi Sekarang
            </Button>
          </Link>
        </Skeleton>
      </div>
    </div>
  );
};
