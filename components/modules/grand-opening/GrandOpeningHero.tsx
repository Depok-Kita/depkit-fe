import { Body, Button, Header, useWindowSize } from "@components";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
export const GrandOpeningHero = () => {
  const { width } = useWindowSize();
  const heroBackground =
    width > 900
      ? "/assets/images/grand-opening-hero.png"
      : width > 500
      ? "/assets/images/grand-opening-hero-tablet.svg"
      : "/assets/images/grand-opening-hero-mobile.svg";
  return (
    <div className="min-h-screen">
      <div className="absolute min-h-screen w-full flex items-center justify-center  bg-powder-light">
        <Image
          src={heroBackground}
          layout="fill"
          objectFit="contain"
          className="z-0 scale-75 tablet:scale-75 desktop:scale-100"
          alt="Landing Accent"
        />
        <div className="bg-totalwhite mx-5 p-[20px] rounded-[20px] desktop:p-[50px] desktop:rounded-[32px] z-10 opacity-90">
          <Header
            preset={
              width >= 1280
                ? "h2"
                : width >= 768
                ? "h3"
                : width >= 400
                ? "h4"
                : "h5"
            }
            decorative
            className="text-denim-dark "
          >
            Grand Opening <span className="text-cerulean">X</span> Talkshow
          </Header>
          <Body preset="b2" className="text-denim-dark text-center">
            🗓️ Sabtu, 20 Agustus 2022
            <br />
            🕒 09.00 - selesai
            <br />
            📍Zoom Meeting
          </Body>
          <div className="flex justify-center mt-6 desktop:mt-4">
            <Button
              preset="primaryDark"
              rightIcon={<ChevronRightIcon className="w-5 h-5 fill-powder" />}
              onClick={() => {
                const offset =
                  document.getElementById("grand-opening-form")?.offsetTop;
                window.scrollTo({
                  top: offset === undefined ? 0 : offset + 10,
                  behavior: "smooth",
                });
              }}
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
