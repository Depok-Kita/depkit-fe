// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
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
            <div className="relative w-full h-[clamp(17.5rem,50vw,38rem)]">
              <Image src={link} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
