import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Dokumentasi } from "@models";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper as SwiperController } from "swiper/types";
import {
  HeaderResponsive as Header,
  BodyResponsive as Body,
  SectionBox,
  useWindowSize,
  Button,
} from "@components";
import { responsive } from "@utils";

import "swiper/css";

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

const DokumView = (/*dokum: Dokumentasi*/) => {
  const windowSize = useWindowSize();
  const [swiperController, setSwiperController] = useState<SwiperController>();
  return (
    <div className="">
      <SectionBox className="w-[min(64rem,80%)]">
        <div className="border-l-8 border-cerulean pl-4">
          <Header windowSize={windowSize} preset="h2">
            Lorem Ipsum Dolor sit amet, consectetur adipiscing elit
          </Header>
          <Body windowSize={windowSize} preset="b1">
            Week 8 - mm/yyyy
          </Body>
        </div>
        <div className="flex flex-row mt-8">
          <ButtonPrev onClick={() => swiperController?.slidePrev()} />
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            centeredSlides={true}
            loop
            //autoplay={{
            //delay: 2500,
            //disableOnInteraction: true,
            //}}
            onSwiper={(swiper) => setSwiperController(swiper)}
            modules={[Navigation, Pagination, Controller]}
            //className="grow-0"
          >
            <SwiperSlide className="">
              <div className="relative w-[300px] h-[200px]">
                <Image
                  src="/assets/images/dokum-page-sample.png"
                  layout="fill"
                  alt="Gambar Dokumentasi"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              <div className="relative w-[300px] h-[200px]">
                <Image
                  src="/assets/images/dokum-page-sample.png"
                  layout="fill"
                  alt="Gambar Dokumentasi"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <ButtonNext onClick={() => swiperController?.slideNext()} />
        </div>
        <Button preset="primaryLight" className="ml-auto">
          Simpan Dokumentasi
        </Button>
      </SectionBox>
    </div>
  );
};

const DokumPage = () => {
  const router = useRouter();
  const { dokumId } = router.query;
  return (
    <div className="pt-32 bg-powder-light">
      <DokumView />
    </div>
  );
};

export default DokumPage;
