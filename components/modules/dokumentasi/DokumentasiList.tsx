import {
  HeaderResponsive,
  useWindowSize,
  Button,
  DokumentasiCard,
} from "@components";
import { Dokumentasi } from "@models";
import { useState } from "react";

type DokumentasiListProps = {
  dokumentasi: Dokumentasi[] | undefined;
};
export const DokumentasiList = ({ dokumentasi }: DokumentasiListProps) => {
  const windowSize = useWindowSize();
  const { width } = useWindowSize();
  const initialAmount = width >= 1280 ? 8 : width >= 768 ? 6 : 4;
  const [dokumentasiAmount, setDokumentasiAmount] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(false);

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
        {dokumentasiSliced?.map((dok: Dokumentasi, index: number) => (
          <DokumentasiCard dokumentasi={dok} index={index} />
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
