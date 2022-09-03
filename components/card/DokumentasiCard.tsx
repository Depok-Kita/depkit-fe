import Link from "next/link";
import {
  Card,
  BodyResponsive,
  HeaderResponsive,
  useWindowSize,
  ShareLinkToClipboard,
} from "@components";
import { Dokumentasi } from "@models";
import { PhotographIcon, PlayIcon } from "@heroicons/react/outline";

type DokumentasiCardProps = {
  dokumentasi: Dokumentasi;
  index: number;
  className?: string;
};

export const DokumentasiCard = ({
  dokumentasi,
  index,
  className,
}: DokumentasiCardProps) => {
  const windowSize = useWindowSize();
  const { width } = useWindowSize();

  const truncate = (input: string) => {
    const words = width >= 1280 ? 50 : 35;
    return input.length > words ? `${input.substring(0, words)}...` : input;
  };

  return (
    <Card
      preset="light"
      className={`w-full ${className} desktop:h-[380px] tablet:h-[280px] mobile:h-[250px] desktop:p-4 tablet:p-[14px] mobile:p-4 relative`}
      key={index}
    >
      <div
        className="desktop:h-36 tablet:h-[40%] mobile:h-[55%] w-[90%] bg-cover bg-center opacity-80 absolute desktop:left-[15px] tablet:left-[11px] rounded-[9px]  "
        style={{
          backgroundImage: `url(${dokumentasi.photoUrls[0]})`,
        }}
      />
      <Link href={`/dokumentasi/${dokumentasi.slug}`}>
        <a>
          <div className="desktop:pt-40 tablet:pt-32 mobile:pt-40">
            <BodyResponsive
              windowSize={windowSize}
              preset="p2"
              presetTablet="p2"
              presetDesktop="p2"
              className="text-denim-dark  font-bold "
            >
              {dokumentasi.date}
            </BodyResponsive>
            <HeaderResponsive
              windowSize={windowSize}
              preset="h7"
              presetTablet="h6"
              presetDesktop="h5"
              className="tablet:block mobile:hidden"
            >
              {truncate(dokumentasi.title)}
            </HeaderResponsive>
          </div>{" "}
        </a>
      </Link>
      <div className="mt-3 flex w-[85%] absolute justify-between bottom-4">
        <div className="flex items-center desktop:gap-2 tablet:gap-0.5 mobile:gap-2">
          <BodyResponsive
            windowSize={windowSize}
            preset="p3"
            presetTablet="p2"
            presetDesktop="p2"
            className="text-cerulean  font-bold "
          >
            {dokumentasi.photoUrls.length}
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
            {dokumentasi.videoUrls.length}
          </BodyResponsive>
          <PlayIcon className="w-5 h-5 stroke-cerulean" />
        </div>
        <div className="flex items-center desktop:gap-2 tablet:gap-0.5 mobile:gap-2">
          {/* <ShareIcon className="w-5 h-5 stroke-denim-dark" /> */}
          <ShareLinkToClipboard
            className="right-0 top-1"
            link={dokumentasi.slug}
          />
        </div>
      </div>
    </Card>
  );
};
