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
import { ArrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
export const Carousel = () => {
  const windowSize = useWindowSize();
  return (
    <div className="relative desktop:min-h-screen bg-denim-dark">
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
            <div className="relative w-full h-[clamp(17.5rem,50vw,38rem)] desktop:min-h-screen">
              <Image
                src={link}
                layout="fill"
                objectFit="cover"
                alt="Gambar Acara Depok Kita"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowDownIcon
        className="absolute text-cerulean w-[63px] h-auto mx-auto z-10 animate-bounce right-[50%] top-[90%] cursor-pointer hidden desktop:block"
        onClick={() => {
          const offset = document.getElementById("profile")?.offsetTop;
          window.scrollTo({
            top: offset === undefined ? 0 : offset - 50,
            behavior: "smooth",
          });
        }}
      />
      <div className="absolute z-10 right-0 w-[80%] max-h-[390px] h-auto mx-auto flex flex-col gap-2 tablet:py-40 tablet:w-3/5 desktop:w-1/2 tablet:my-auto desktop:top-[20%] desktop:bottom-[20%] tablet:top-[38%] tablet:bottom-[21%] mobile:bottom-0 tablet:right-auto p-[clamp(1rem,1vw,2.5rem)] pl-14 desktop:pl-40 tablet:pl-28 tablet:pr-16 justify-center">
        <Image
          src="/assets/images/landing-accent-bg.png"
          layout="fill"
          className="z-10"
          alt="Landing Accent"
        />
        <HeaderResponsive
          preset="h6"
          presetTablet="h4"
          presetDesktop="h3"
          className="text-denim-dark z-20"
          decorative
          windowSize={windowSize}
        >
          Grand Opening <br></br>Depok Kita UI 2022
        </HeaderResponsive>
        <BodyResponsive
          preset="p3"
          presetTablet="p2"
          presetDesktop="p1"
          className="text-denim-dark z-20"
          windowSize={windowSize}
        >
          Pembukaan kegiatan pengabdian masyarakat Departemen Sosial Masyarakat
          BEM UI 2022
        </BodyResponsive>
        <div className="desktop:mt-10 mt-auto z-20">
          <Link href="/grand-opening">
            <a>
              <Button
                preset="secondaryLight"
                rightIcon={<ChevronRightIcon className="w-4" />}
                className="grow-0"
              >
                Grand Opening
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
