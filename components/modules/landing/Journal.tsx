import { useState } from "react";
// import { Controller } from "swiper";
import { Controller, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SectionTitle } from "./SectionTitle";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Card } from "@components/card";
import Image from "next/image";
import { Body, Header } from "@components/typography";
import { Swiper as SwiperController } from "swiper/types";

const journals: Journal[] = [
  {
    title: "Journal 1",
    photoUrl: "/assets/images/home-img.png",
    description:
      "LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat risus eu mi egestas, non rutrum mauris laoreet. Ut eget dignissim metus, non vehicula dolor. Praesent at magna vel velit accumsan aliquam et vel elit. Etiam pretium nisi iaculis sem pharetra pellentesque. Donec tincidunt in augue a consectetur. Donec tincidunt consequat magna.",
  },
  {
    title: "Journal 2",
    photoUrl: "/assets/images/home-img.png",
    description: "Lorem ipsum dolor sit amet",
  },
];

export const Journal = () => {
  const [swiperController, setSwiperController] = useState<SwiperController>();
  const journalSlides = journals.map((journal) => (
    <SwiperSlide key={journal.title}>
      <JournalCard journal={journal} />
    </SwiperSlide>
  ));
  return (
    <div className="px-[5%] py-8 bg-denim-dark">
      <SectionTitle light>Jurnal Terbaru</SectionTitle>

      <div className="flex gap-4 justify-center w-[max(80%,15rem)] mx-auto">
        <ButtonPrev onClick={() => swiperController?.slidePrev()} />
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          // navigation={{
          //   prevEl: ".btn-prev-journal",
          //   nextEl: ".btn-next-journal",
          // }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiperController(swiper)}
          modules={[Navigation, Pagination, Controller, Autoplay]}
        >
          {journalSlides}
        </Swiper>
        <ButtonNext onClick={() => swiperController?.slideNext()} />
      </div>
    </div>
  );
};

const ButtonPrev = ({ onClick }: NavButtonProps) => {
  return (
    <button className="btn-prev-journal text-totalwhite" onClick={onClick}>
      <ChevronLeftIcon className="w-4 tablet:w-8" />
    </button>
  );
};

const ButtonNext = ({ onClick }: NavButtonProps) => {
  return (
    <button className="btn-next-journal text-totalwhite" onClick={onClick}>
      <ChevronRightIcon className="w-4 tablet:w-8" />
    </button>
  );
};

type NavButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type Journal = {
  title: string;
  photoUrl: string;
  description: string;
};

type JournalCardProps = {
  journal: Journal;
};

const JournalCard = ({ journal }: JournalCardProps) => {
  return (
    <div className="bg-totalwhite p-2 rounded flex flex-col tablet:flex-row gap-2">
      <div className="relative w-full flex-1  h-[clamp(7.5rem,20vw,15rem)] ">
        <Image
          src={journal.photoUrl}
          layout="fill"
          objectFit="cover"
          // width={180}
          // height={120}
        />
      </div>
      <div className="flex-1">
        <Header preset="h5">{journal.title}</Header>
        <Body preset="p3" className="line-clamp-8 text-ellipsis">
          {journal.description}
        </Body>
      </div>
    </div>
  );
};
