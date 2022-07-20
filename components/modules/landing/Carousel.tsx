// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import { HOME_CAROUSEL_IMAGES } from "@constants";
import Image from "next/image";
import { Body, Header } from "@components/typography";
import { Button } from "@components/button";
import { ChevronRightIcon } from "@heroicons/react/solid";

export const Carousel = () => {
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
      <div className="absolute z-10  bottom-0  right-0  left-0 w-[80%] min-h-[50%] h-auto bg-[rgba(242,250,254,0.8)] mx-auto p-[clamp(1rem,1vw,2.5rem)] flex flex-col gap-2 tablet:w-1/2 tablet:my-auto tablet:top-[20%] tablet:bottom-[20%] tablet:right-auto ">
        <Header preset="h6">Grand Launching Depok Kita UI 2022</Header>
        <Body preset="p3">
          Pembukaan kegiatan pengabdian masyarakat Departemen Sosial Masyarakat
          BEM UI 2022
        </Body>
        <div className="mt-auto">
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
