// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import { HOME_CAROUSEL_IMAGES } from "@constants";
import Image from "next/image";
import { HeaderResponsive, BodyResponsive } from "@components/typography";
import { Button } from "@components/button";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useWindowSize } from "@components/hooks";
import LandingAccent from "@images/landing-accent.svg";
export const Carousel = () => {
  const windowSize = useWindowSize();

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        {HOME_CAROUSEL_IMAGES.map((link) => (
          <SwiperSlide key={link}>
            <div className="relative w-full h-[clamp(17.5rem,50vw,38rem)]">
              <Image src={link} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-10    right-0  desktop:left-16 tablet:left-10 mobile:left-[74px] w-[80%] min-h-[50%] h-auto bg-[rgba(242,250,254,0.8)] mx-auto p-[clamp(1rem,1vw,2.5rem)] flex flex-col gap-2 tablet:w-1/2 tablet:my-auto desktop:top-[20%] desktop::bottom-[20%] tablet:top-[35%] tablet:bottom-[10%] mobile:bottom-0 tablet:right-auto  desktop:pl-12 tablet:pl-6 desktop:pt-10">
        <LandingAccent className="h-full absolute desktop:-left-16 mobile:-left-[54px] top-0 z-50" />{" "}
        <HeaderResponsive
          preset="h6"
          presetTablet="h4"
          presetDesktop="h3"
          className="  text-denim-dark"
          decorative
          windowSize={windowSize}
        >
          Grand Launching <br></br>Depok Kita UI 2022
        </HeaderResponsive>
        <BodyResponsive
          preset="p3"
          presetTablet="p2"
          presetDesktop="p1"
          windowSize={windowSize}
        >
          Pembukaan kegiatan pengabdian masyarakat Departemen Sosial Masyarakat
          BEM UI 2022
        </BodyResponsive>
        <div className="desktop:mt-10 mt-auto">
          <Button
            preset="secondaryLight"
            rightIcon={<ChevronRightIcon className="w-4" />}
            className="grow-0"
          >
            Grand Opening
          </Button>
        </div>
      </div>
    </div>
  );
};
