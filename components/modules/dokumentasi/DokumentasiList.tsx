import {
  HeaderResponsive,
  useWindowSize,
  Card,
  BodyResponsive,
  Button,
} from "@components";
import { PhotographIcon, PlayIcon, ShareIcon } from "@heroicons/react/outline";
import { Dokumentasi } from "@models";
import Link from "next/link";
import { useEffect, useState } from "react";

type DokumentasiListProps = {
  dokumentasi: Dokumentasi[] | undefined;
};
export const DokumentasiList = ({ dokumentasi }: DokumentasiListProps) => {
  const windowSize = useWindowSize();
  const { width } = useWindowSize();
  const initialAmount = width >= 1280 ? 8 : width >= 768 ? 6 : 4;
  const [dokumentasiAmount, setDokumentasiAmount] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(false);

  const truncate = (input: string) => {
    const words = width >= 1280 ? 50 : 35;
    return input.length > words ? `${input.substring(0, words)}...` : input;
  };

  const dokumentasiSliced = dokumentasi?.slice(
    0,
    isClicked ? dokumentasiAmount + initialAmount : initialAmount
  );
  const handleClick = () => {
    setDokumentasiAmount(dokumentasiAmount + initialAmount);
    setIsClicked(true);
  };

  return (
    <div
      className="h-full bg-powder desktop:py-24 tablet:py-16 mobile:py-6 mobile:px-6 tablet:px-20 desktop:px-32"
      id="listDokumentasi"
    >
      <div className="flex items-center desktop:gap-6 tablet:gap-4 mobile:gap-4">
        <div className="desktop:h-14 tablet:h-9 mobile:h-6 desktop:w-2 tablet:w-1.5 mobile:w-1 bg-cerulean"></div>
        <HeaderResponsive
          windowSize={windowSize}
          preset="h4"
          presetTablet="h3"
          presetDesktop="h2"
          className="text-denim-dark"
        >
          Dokumentasi
        </HeaderResponsive>
      </div>
      <div className="desktop:mt-12 tablet:mt-7 mobile:mt-4 grid desktop:grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-1 desktop:gap-6 tablet:gap-4 mobile:gap-4">
        {dokumentasiSliced?.map((dok: any, index: number) => (
          <Link href={`/dokumentasi/${dok.slug}`} key={index}>
            <a>
              <Card
                preset="light"
                className="w-full desktop:h-[380px] tablet:h-[280px] mobile:h-[250px] desktop:p-4 tablet:p-[14px] mobile:p-4 relative cursor-pointer"
                key={index}
              >
                <div
                  className="desktop:h-36 tablet:h-[40%] mobile:h-[55%] w-[90%] bg-cover bg-center opacity-80 absolute desktop:left-[15px] tablet:left-[11px] rounded-[9px]  "
                  style={{
                    backgroundImage: `url(${dok.photoUrls[0]})`,
                  }}
                />
                <div className="desktop:pt-40 tablet:pt-32 mobile:pt-40">
                  <BodyResponsive
                    windowSize={windowSize}
                    preset="p2"
                    presetTablet="p2"
                    presetDesktop="p2"
                    className="text-denim-dark  font-bold "
                  >
                    {dok.date}
                  </BodyResponsive>
                  <HeaderResponsive
                    windowSize={windowSize}
                    preset="h7"
                    presetTablet="h6"
                    presetDesktop="h5"
                    className="tablet:block mobile:hidden"
                  >
                    {truncate(dok.title)}
                  </HeaderResponsive>
                </div>
                <div className="mt-3 flex w-[85%] absolute justify-between bottom-4">
                  <div className="flex items-center desktop:gap-2 tablet:gap-0.5 mobile:gap-2">
                    <BodyResponsive
                      windowSize={windowSize}
                      preset="p3"
                      presetTablet="p2"
                      presetDesktop="p2"
                      className="text-cerulean  font-bold "
                    >
                      {dok.photoUrls.length}
                    </BodyResponsive>
                    <PhotographIcon className="w-5 h-5 stroke-cerulean" />
                  </div>
                  <div className="flex items-center desktop:gap-2 tablet:gap-0.5 mobile:gap-2">
                    <BodyResponsive
                      windowSize={windowSize}
                      preset="p3"
                      presetTablet="p2"
                      presetDesktop="p2"
                      className="text-cerulean  font-bold "
                    >
                      {dok.videoUrls.length}
                    </BodyResponsive>
                    <PlayIcon className="w-5 h-5 stroke-cerulean" />
                  </div>
                  <div className="flex items-center desktop:gap-2 tablet:gap-0.5 mobile:gap-2">
                    <ShareIcon className="w-5 h-5 stroke-denim-dark" />
                    <BodyResponsive
                      windowSize={windowSize}
                      preset="p3"
                      presetTablet="p2"
                      presetDesktop="p2"
                      className="text-denim-dark  font-bold "
                    >
                      Bagikan
                    </BodyResponsive>
                  </div>
                </div>
              </Card>
            </a>
          </Link>
        ))}
      </div>
      <div className="flex justify-center tablet:mt-8 mobile:mt-4">
        <Button preset="primaryDark" onClick={handleClick}>
          Dokumentasi Lainnya
        </Button>
      </div>
    </div>
  );
};
