import DepkitLogo from "@images/depkit-logo-1.svg";
import { HeaderResponsive, BodyResponsive } from "@components/typography";
import { useWindowSize } from "@components/hooks";
export const DepkitProfile = () => {
  const windowSize = useWindowSize();
  const profileDescLong =
    "Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi Pendidikan Kreatif dan Kesehatan Lingkungan serta dimeriahkan dengan pesta rakyat dalam rangkaian Social Event.";
  const profileDescShort =
    "Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi dan pesta rakyat.";
  return (
    <div className="desktop:px-[90px] mobile:px-8 desktop:py-24 mobile:py-8 tablet:py-14 flex justify-center  desktop:gap-7 mobile:gap-4">
      <DepkitLogo className="desktop:w-96 desktop:h-36 mobile:min-w-[80px] mobile:my-auto" />
      <div>
        <HeaderResponsive
          preset="h6"
          presetTablet="h4"
          presetDesktop="h3"
          windowSize={windowSize}
        >
          Depok Kita UI 2022
        </HeaderResponsive>
        <BodyResponsive
          preset="p3"
          presetTablet="p2"
          presetDesktop="p1"
          className="desktop:mt-5"
          windowSize={windowSize}
        >
          <span className="tablet:hidden">{profileDescShort}</span>
          <span className="hidden tablet:inline">{profileDescLong}</span>
        </BodyResponsive>
      </div>
    </div>
  );
};
