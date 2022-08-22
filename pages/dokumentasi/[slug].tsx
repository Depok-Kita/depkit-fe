import { useEffect, useState } from "react";
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
  LoadingScreen,
} from "@components";
import { responsive } from "@utils";
import axios from "axios";

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

const DokumView = ({ dokum }: { dokum: Dokumentasi }) => {
  const windowSize = useWindowSize();
  const [swiperController, setSwiperController] = useState<SwiperController>();

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
