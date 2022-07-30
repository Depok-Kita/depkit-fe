import TransparentHalfLove from "@images/transparent-half-love.svg";
import UliranArticlesTabletDesktop from "@images/uliran-articles-tablet-desktop.svg";
import UliranPlusHeartDesktop from "@images/uliran-plus-heart-desktop.svg";
import { Header, Body, Button } from "@components";
import { SearchIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";
import { useWindowSize } from "@hooks";

export const ArtikelTitlePage = () => {
  const { width } = useWindowSize();
  return (
    <div className="flex mobile:justify-center mobile:items-center bg-powder-light mobile:h-[360px] tablet:h-[380px] tablet:pt-10 desktop:h-[600px]">
      <div className="mobile:invisible tablet:invisible desktop:visible absolute top-40 right-48">
        <UliranPlusHeartDesktop className="animate-pulse" />
      </div>
      <div className="flex flex-col relative tablet:w-full tablet:pl-10 desktop:pl-28">
        <div className="mobile:visible tablet:visible desktop:invisible flex justify-end tablet:absolute tablet:right-24 desktop:absolute desktop:right-48">
          <TransparentHalfLove className="animate-pulse" />
        </div>
        {/* ULIRAN TABLET*/}
        <div className="mobile:invisible tablet:visible desktop:invisible absolute tablet:right-24 right-8 top-0">
          <UliranArticlesTabletDesktop className="animate-pulse" />
        </div>
        {/* ULIRAN DESKTOP*/}
        <Header
          preset="h3"
          className="font-bold mobile:px-8 mobile:pt-4 tablet:text-[36px] desktop:text-[64px]"
        >
          Artikel Depok Kita
        </Header>
        <Body
          preset="p3"
          className="mobile:max-w-[260px] mobile:pl-8 tablet:max-w-[330px] tablet:text-[15px] desktop:max-w-[500px] desktop:text-[20px]"
        >
          Temukan cerita, momen, dan kenangan dari penulis tentang Depok Kita
          2022
        </Body>
        <div className="flex mobile:justify-center mobile:p-6 tablet:justify-start tablet:pl-8 desktop:pt-14">
          <Link
            activeClass="active"
            to="search-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button
              preset="primaryDark"
              leftIcon={<SearchIcon width={20} />}
              className="mobile:max-w-[160px] tablet:max-w-[200px]"
            >
              Cari Artikel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
