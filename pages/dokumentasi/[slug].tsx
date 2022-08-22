import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Dokumentasi } from "@models";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Controller,
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  FreeMode,
} from "swiper";
import { Swiper as SwiperController } from "swiper/types";
import {
  HeaderResponsive as Header,
  BodyResponsive as Body,
  SectionBox,
  useWindowSize,
  Button,
  LoadingScreen,
} from "@components";
import { responsive } from "@utils";
import axios from "axios";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
type NavButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonPrev = ({ onClick }: NavButtonProps) => {
  return (
    <button className=" text-denim-light" onClick={onClick}>
      <ChevronLeftIcon className="mobile:w-8 tablet:w-8 desktop:w-14" />
    </button>
  );
};

const ButtonNext = ({ onClick }: NavButtonProps) => {
  return (
    <button className="text-denim-light" onClick={onClick}>
      <ChevronRightIcon className="mobile:w-8 tablet:w-8 desktop:w-14" />
    </button>
  );
};

const DokumBottomSlider = ({
  dokum,
  selectedDokumIndex,
  selectPreview,
  onSwiper,
}: {
  dokum: Dokumentasi;
  selectedDokumIndex: number;
  selectPreview: (index: number) => void;
  onSwiper: (swiper: SwiperController) => void;
}) => {
  return (
    <div className="bg-denim-dark p-5  rounded">
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        freeMode
        onSwiper={onSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[175px]"
      >
        {dokum.photoUrls.map((imageUrl: string, index: number) => (
          <SwiperSlide
            key={index}
            className="relative flex-shrink h-fit max-w-[30%]"
          >
            <Image
              src={imageUrl}
              layout="fill"
              alt="item image"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const DokumView = ({ dokum }: { dokum: Dokumentasi }) => {
  const windowSize = useWindowSize();
  const [mainSwiper, setMainSwiper] = useState<SwiperController>();
  const [thumbSwiper, setThumbSwiper] = useState<SwiperController>();
  const [selectedDokumIndex, selectPreview] = useState<number>(0);
  return (
    <div className="">
      <SectionBox className="w-[min(64rem,80%)]">
        <div className="border-l-8 border-cerulean pl-4">
          <Header windowSize={windowSize} preset="h2">
            {dokum.title}
          </Header>
          <Body windowSize={windowSize} preset="b1">
            {dokum.date}
          </Body>
        </div>
        <div className="flex flex-row mt-8">
          <ButtonPrev onClick={() => mainSwiper?.slidePrev()} />
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            centeredSlides={true}
            loop
            //autoplay={{
            //delay: 2500,
            //disableOnInteraction: true,
            //}}
            onSwiper={setMainSwiper}
            modules={[Navigation, Thumbs, Controller]}
            thumbs={{ swiper: thumbSwiper }}
          >
            {dokum.photoUrls.map((photoUrl) => (
              <SwiperSlide className="" key={photoUrl}>
                <div className="relative w-[300px] h-[200px]">
                  <Image
                    src={photoUrl}
                    layout="fill"
                    alt="Gambar Dokumentasi"
                  />
                </div>
              </SwiperSlide>
            ))}
            {dokum.videoUrls.map((videoUrl) => (
              <SwiperSlide className="" key={videoUrl}>
                <iframe
                  src={videoUrl}
                  className="relative w-[300px] h-[200px]"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
          <ButtonNext onClick={() => mainSwiper?.slideNext()} />
        </div>
        <Button preset="primaryLight" className="ml-auto">
          Simpan Dokumentasi
        </Button>
        <DokumBottomSlider
          dokum={dokum}
          selectedDokumIndex={selectedDokumIndex}
          selectPreview={selectPreview}
          onSwiper={setThumbSwiper}
        />
      </SectionBox>
    </div>
  );
};

const DokumPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const [dokum, setDokum] = useState<Dokumentasi>();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios.get("/api/dokumentasi?slug=" + slug).then((response) => {
      setDokum(response.data);
      setLoading(false);
    });
  }, [slug]);
  if (isLoading) return <LoadingScreen />;
  return (
    <div className="pt-32 bg-powder-light">
      {dokum && <DokumView dokum={dokum} />}
    </div>
  );
};

export default DokumPage;
