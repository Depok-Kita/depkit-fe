// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import { HOME_CAROUSEL_IMAGES } from "@constants";
import Image from "next/image";

export const Carousel = () => {
  return (
    <div>
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
            <Image src={link} height="700" width="800" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
