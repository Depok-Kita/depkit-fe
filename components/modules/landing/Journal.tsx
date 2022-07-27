import { useState } from "react";
import { Controller, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionTitle } from "./SectionTitle";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Body, Header } from "@components/typography";
import { Swiper as SwiperController } from "swiper/types";
import { useWindowSize } from "@components/hooks";

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
    <div className="px-[5%] desktop:py-20 mobile:py-8 tablet:py-12 bg-denim-dark">
      <SectionTitle light>Artikel Terbaru</SectionTitle>

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
      <ChevronLeftIcon className="mobile:w-8 tablet:w-8 desktop:w-14" />
    </button>
  );
};

const ButtonNext = ({ onClick }: NavButtonProps) => {
  return (
    <button className="btn-next-journal text-totalwhite" onClick={onClick}>
      <ChevronRightIcon className="mobile:w-8 tablet:w-8 desktop:w-14" />
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
  const { width } = useWindowSize();
  const truncate = (input: string) =>
    input.length > 150 ? `${input.substring(0, 150)}...` : input;
  return (
    <Box
      bgGradient={"linear(to-b, #FFFFFF, #F2FAFE)"}
      className="bg-totalwhite desktop:p-8 mobile:p-4 desktop:h-full mobile:h-80 tablet:h-44 flex flex-col tablet:flex-row  desktop:gap-8 mobile:gap-2 rounded-3xl"
    >
      <div className="relative w-full tablet:flex-1  ">
        <Image
          src={journal.photoUrl}
          width={width >= 1280 ? 450 : width >= 768 ? 212 : 180}
          height={width >= 1280 ? 236 : width >= 768 ? 141 : 120}
          className="rounded-2xl"
        />
      </div>
      <div className="flex-1">
        <Header preset="h5">{journal.title}</Header>
        <Body preset="p3" className="line-clamp-8 text-ellipsis">
          {truncate(journal.description)}
        </Body>
      </div>
    </Box>
  );
};
