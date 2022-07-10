import DepkitLogo from "@images/depkit-logo-1.svg";
import { Header, Body } from "@components/typography";

export const DepkitProfile = () => {
  const profileDescLong =
    "Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi Pendidikan Kreatif dan Kesehatan Lingkungan serta dimeriahkan dengan pesta rakyat dalam rangkaian Social Event.";
  const profileDescShort =
    "Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi dan pesta rakyat.";
  return (
    <div className="px-[5%] py-8 flex justify-center content-center gap-4">
      <DepkitLogo className="min-w-[80px] my-auto" />
      <div className="">
        <Header preset="h6">Depok Kita UI 2022</Header>
        <Body preset="p3" className="">
          <span className="tablet:hidden">{profileDescShort}</span>
          <span className="hidden tablet:inline">{profileDescLong}</span>
        </Body>
      </div>
    </div>
  );
};
