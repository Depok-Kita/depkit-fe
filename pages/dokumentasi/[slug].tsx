import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Dokumentasi } from "@models";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Thumbs, FreeMode } from "swiper";
import { Swiper as SwiperController } from "swiper/types";
import {
  HeaderResponsive as Header,
  BodyResponsive as Body,
  SectionBox,
  useWindowSize,
  Button,
  LoadingScreen,
  DokumentasiCard,
} from "@components";
import { downloadFile } from "@utils";
import axios from "axios";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
} from "@heroicons/react/solid";
import { PlayIcon } from "@heroicons/react/outline";
import UliranArticles from "@images/uliran-articles.svg";

const DokumPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [dokum, setDokum] = useState<Dokumentasi>();
  const [dokumLainnya, setDokumLainnya] = useState<Dokumentasi[]>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isDokumLainnyaLoading, setIsDokumLainnyaLoading] =
    useState<boolean>(true);
  useEffect(() => {
    axios.get("/api/dokumentasi?slug=" + slug).then((response) => {
      setDokum(response.data[0]);
      setLoading(false);
    });
    axios.get("/api/dokumentasi").then((response) => {
      setDokumLainnya(response.data);
      setIsDokumLainnyaLoading(false);
    });
  }, [slug]);
  if (isLoading || isDokumLainnyaLoading) return <LoadingScreen />;
  return (
    <div className="mobile:pt-24 tablet:pt-36 desktop:pt-20 bg-powder-light">
      {dokum && <DokumView dokum={dokum} />}
      {dokum && dokumLainnya && (
        <OtherDokumSection dokum={dokum} dokumLainnya={dokumLainnya} />
      )}
    </div>
  );
};

export default DokumPage;

const DokumView = ({ dokum }: { dokum: Dokumentasi }) => {
  const windowSize = useWindowSize();
  const [mainSwiper, setMainSwiper] = useState<SwiperController>();
  const [thumbSwiper, setThumbSwiper] = useState<SwiperController>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const getActiveMedia = () => {
    if (activeIndex >= dokum.photoUrls.length) {
      return dokum.videoUrls[activeIndex - dokum.photoUrls.length];
    }
    return dokum.photoUrls[activeIndex];
  };
  const saveDokum = () => {
    const mediaUrl = getActiveMedia();
    downloadFile(mediaUrl);
  };
  return (
    <div className="">
      <SectionBox className="w-[min(64rem,80%)] desktop:pt-10">
        <Link href="/dokumentasi">
          <div className="rounded-full w-10 desktop:w-12 bg-[#F2FAFE]  inline-block drop-shadow-2xl">
            <ChevronLeftIcon className="text-denim-light cursor-pointer" />
          </div>
        </Link>
        <div className="border-l-8 border-cerulean pl-4 mt-4">
          <Header
            windowSize={windowSize}
            preset="h4"
            presetDesktop="h2"
            presetTablet="h3"
          >
            {dokum.title}
          </Header>
          <Body
            windowSize={windowSize}
            preset="b3"
            presetDesktop="b1"
            presetTablet="b2"
          >
            {dokum.date}
          </Body>
        </div>
        <div className="flex flex-row mt-8">
          <ButtonPrev onClick={() => mainSwiper?.slidePrev()} />
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            centeredSlides={true}
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, Thumbs, Controller]}
            thumbs={{ swiper: thumbSwiper }}
          >
            {dokum.photoUrls.map((photoUrl, index) => (
              <SwiperSlide
                className="w-screen"
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full  h-[280px] tablet:h-[500px]">
                  <Image
                    src={photoUrl}
                    layout="fill"
                    alt="Gambar Dokumentasi"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
            {dokum.videoUrls.map((videoUrl, index) => (
              <SwiperSlide
                className="w-screen"
                key={videoUrl}
                onClick={() => setActiveIndex(convertVideoIndex(index, dokum))}
              >
                <iframe
                  src={videoUrl}
                  className=" w-full h-[280px] tablet:h-[500px] rounded-lg"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
          <ButtonNext onClick={() => mainSwiper?.slideNext()} />
        </div>
        <Button
          preset="secondaryLight"
          leftIcon={<DownloadIcon className="w-5" />}
          className="ml-auto mt-4"
          onClick={saveDokum}
        >
          Simpan Dokumentasi
        </Button>
        <DokumBottomSlider
          dokum={dokum}
          onSwiper={setThumbSwiper}
          activeIndex={activeIndex}
        />
        <div className="flex justify-center py-4">
          <UliranArticles className="tabldfdfdfet:w-[600px]" />
        </div>
      </SectionBox>{" "}
    </div>
  );
};

const OtherDokumSection = ({
  dokum, // current viewed dokum
  dokumLainnya,
}: {
  dokum: Dokumentasi;
  dokumLainnya: Dokumentasi[];
}) => {
  const { width } = useWindowSize();
  const windowSize = useWindowSize();
  return (
    <div className="mx-auto w-[min(64rem,80%)]">
      <div className="h-full bg-powder desktop:px-52 tablet:px-20 mobile:px-10 desktop:pt-[50px] tablet:pt-7 mobile:pt-4 desktop:pb-36 tablet:pb-28 mobile:pb-20 ">
        <Header
          windowSize={windowSize}
          preset="h5"
          presetDesktop="h3"
          presetTablet="h4"
        >
          Dokumentasi Lainnya
        </Header>
        <div className="desktop:mt-6 tablet:mt-4 mobile:mt-2 tablet:grid desktop:grid-cols-4 tablet:grid-cols-3 gap-3">
          {dokumLainnya?.map((dok: Dokumentasi, index: number) => (
            <div
              className={`${
                dok.slug === dokum.slug ||
                index > (width >= 1280 ? 4 : width >= 768 ? 3 : 2)
                  ? "hidden"
                  : ""
              }

          
        tablet:mt-0 mobile:mt-4`}
              key={index}
            >
              <DokumentasiCard dokumentasi={dok} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type NavButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  dark?: boolean;
};

const ButtonPrev = ({ onClick, dark }: NavButtonProps) => {
  return (
    <button
      className={dark ? "text-totalwhite" : "text-denim-light"}
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-8 tablet:w-8 desktop:w-14" />
    </button>
  );
};

const ButtonNext = ({ onClick, dark }: NavButtonProps) => {
  return (
    <button
      className={dark ? "text-totalwhite" : "text-denim-light"}
      onClick={onClick}
    >
      <ChevronRightIcon className="w-8 tablet:w-8 desktop:w-14" />
    </button>
  );
};

const DokumBottomSlider = ({
  dokum,
  onSwiper,
  activeIndex,
}: // setActiveIndex,
{
  dokum: Dokumentasi;
  onSwiper: (swiper: SwiperController) => void;
  //setActiveIndex: (index: number) => void;
  activeIndex: number;
}) => {
  const navPrefRef = useRef(null);
  const navNextRef = useRef(null);
  const navPrefEl = (
    <ChevronLeftIcon
      ref={navPrefRef}
      id="thumb-nav-prev"
      className="w-8  absolute bg-powder opacity-50 inset-y-0 left-3 z-10 rounded-full text-denim-light cursor-pointer my-auto"
    />
  );
  const navNextEl = (
    <ChevronRightIcon
      ref={navPrefRef}
      id="thumb-nav-next"
      className="w-8  absolute bg-powder opacity-50 inset-y-0 right-3 z-10 rounded-full text-denim-light cursor-pointer my-auto"
    />
  );
  return (
    <div className="bg-denim-dark px-12 py-5 my-6 rounded-lg hidden tablet:block justify-between h-[100px] desktop:h-[150px] relative">
      {navPrefEl}
      {navNextEl}
      <Swiper
        spaceBetween={15}
        slidesPerView="auto"
        freeMode
        navigation={{
          prevEl: "#thumb-nav-prev",
          nextEl: "#thumb-nav-next",
        }}
        onSwiper={onSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-full swiper-bottom-nav"
      >
        {dokum.photoUrls.map((imageUrl: string, index: number) => (
          <SwiperSlide
            key={index}
            className={`relative flex-shrink desktop:h-28 tablet:h-14 max-w-[18%]  cursor-pointer  ${
              activeIndex == index ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image
              src={imageUrl}
              layout="fill"
              alt="item image"
              objectFit="cover"
              className="rounded transform transition duration-500 hover:scale-150"
            />
          </SwiperSlide>
        ))}
        {dokum.videoUrls.map((videoUrl: string, index: number) => (
          <SwiperSlide
            key={convertVideoIndex(index, dokum)}
            className={`relative flex-shrink desktop:h-28 tablet:h-14 max-w-[18%]  cursor-pointer  ${
              activeIndex == convertVideoIndex(index, dokum)
                ? "opacity-100"
                : "opacity-50"
            }`}
          >
            <div className="overflow-hidden h-full bg-black relative">
              <video className="w-full h-full transform transition duration-500 hover:scale-150">
                <source src={videoUrl} type="video/mp4" />
              </video>
              <PlayIcon className="absolute text-cerulean w-10 inset-0 mx-auto my-auto z-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const convertVideoIndex = (index: number, dokum: Dokumentasi) => {
  return index + dokum.photoUrls.length;
};
