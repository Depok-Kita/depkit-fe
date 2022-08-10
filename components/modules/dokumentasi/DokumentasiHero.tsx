import {
  useWindowSize,
  HeaderResponsive,
  BodyResponsive,
  Button,
} from "@components";
import Image from "next/image";
import DokumentasiAsset from "@images/dokumentasi-camera.svg";

export const DokumentasiHero = () => {
  const windowSize = useWindowSize();
  const scrollTo = (target: string) => {
    var elmntToView = document.getElementById(target);
    elmntToView?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-screen mobile:px-6 tablet:px-20 desktop:px-32 mobile:pt-24 tablet:pt-36 desktop:pt-20 ">
      <div
        className="h-screen w-full bg-cover bg-center absolute -z-10 left-0 top-0 opacity-80"
        style={{
          backgroundImage: `url(
          "/assets/images/dokumentasi-hero.jpeg"
        )`,
        }}
      />
      <div className="flex tablet:gap-8 desktop:gap-14  items-center h-full">
        <div className="h-auto bg-[rgba(242,250,254,0.8)] desktop:w-[50%] tablet:w-[70%] mobile:w-full">
          <div className="desktop:py-8 tablet:py-6 mobile:py-6 mobile:pl-5 tablet:pl-6 tablet:pr-8 mobile:pr-16 desktop:pl-10 desktop:pr-20 ">
            <HeaderResponsive
              windowSize={windowSize}
              preset="h4"
              presetTablet="h3"
              presetDesktop="h2"
              decorative
            >
              Dokumentasi Depok Kita
            </HeaderResponsive>
            <BodyResponsive
              windowSize={windowSize}
              preset="p3"
              presetTablet="p2"
              presetDesktop="p1"
            >
              Temukan momen dan kenangan dari dokumenter tentang Depok Kita 2022
            </BodyResponsive>
            <Button
              preset="primaryDark"
              padding="desktop:py-3 desktop:px-5 tablet:py-2 tablet:px-4 mobile:py-2 mobile:px-4"
              className="desktop:mt-6 tablet:mt-4 mobile:mt-4"
              onClick={() => scrollTo("listDokumentasi")}
            >
              Eksplor Dokumentasi
            </Button>
          </div>
        </div>
        <DokumentasiAsset className="tablet:block mobile:hidden" />
      </div>
    </div>
  );
};
