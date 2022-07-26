import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import { Header, Body, Card, useWindowSize } from "@components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { SPEAKER_GRANDOPENING } from "@constants";
import { Speaker } from "@models";
import Image from "next/image";
export const GrandOpeningSpeaker = () => {
  const { width } = useWindowSize();
  return (
    <div className="bg-powder-light h-full w-full desktop:py-24 tablet:py-12 mobile:py-7">
      <Header
        preset={width >= 1280 ? "h2" : width >= 768 ? "h3" : "h4"}
        className="text-center"
      >
        Pembicara Kami
      </Header>
      <div className="flex justify-center mt-6">
        <div className="desktop:w-52 tablet:w-40 mobile:w-20 bg-cerulean h-1.5"></div>
      </div>
      <div className="relative desktop:mx-32 tablet:mx-24 mobile:mx-12">
        <Swiper
          className="catalog-carousel "
          navigation={{
            prevEl: ".button-previous",
            nextEl: ".button-next",
          }}
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 360px
            360: {
              slidesPerView: 1,
              spaceBetween: 5,
              slidesPerGroup: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
              slidesPerGroup: 2,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
          }}
        >
          {SPEAKER_GRANDOPENING?.map((speaker: Speaker, index: number) => (
            <SwiperSlide
              className="flex justify-center desktop:mt-12 tablet:mt-10 mobile:mt-7 pb-10"
              key={index}
            >
              <Card
                preset="light"
                className="w-full"
                padding="desktop:p-10 tablet:p-6 mobile:p-4"
              >
                <div className="flex desktop:gap-9 mobile:gap-4">
                  <Image
                    src={"/" + speaker.imageUrl}
                    width={width >= 1280 ? 800 : width >= 768 ? 600 : 400}
                    height={width >= 1280 ? 800 : width >= 768 ? 600 : 400}
                    className="rounded-[18px]"
                    alt={speaker.name}
                  />
                  <div>
                    <Header
                      preset={width >= 1280 ? "h4" : width >= 768 ? "h5" : "h6"}
                      className="text-denim-dark"
                    >
                      {speaker.name}
                    </Header>
                    <Body
                      preset={width >= 1280 ? "p2" : "p3"}
                      className="text-denim-light desktop:mt-4 tablet:mt-2 mobile:mt-1 "
                    >
                      {speaker.description}
                    </Body>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="button-previous absolute desktop:-left-20 tablet:-left-16 mobile:-left-10 desktop:top-[45%] tablet:top-[40%] mobile:top-[40%] z-50 flex items-center w-10 tablet:w-12 cursor-pointer  ">
          <ChevronLeftIcon className="w-10 h-10 fill-denim-dark" />
        </div>

        <div className="button-next absolute desktop:-right-20 tablet:-right-16 mobile:-right-10 desktop:top-[45%] tablet:top-[40%] mobile:top-[40%] z-50 flex items-center w-10 tablet:w-12 cursor-pointer  ">
          <ChevronRightIcon className="w-10 h-10 fill-denim-dark" />
        </div>
      </div>
    </div>
  );
};
