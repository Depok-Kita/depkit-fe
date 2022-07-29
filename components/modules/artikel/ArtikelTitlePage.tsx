import TransparentHalfLove from "@images/transparent-half-love.svg";
import { Header, Body, Button } from "@components";
import { SearchIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

export const ArtikelTitlePage = () => {
  return (
    <div className="flex justify-center items-center bg-powder-light mobile:h-[360px]">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <TransparentHalfLove className="animate-pulse" />
        </div>
        <Header preset="h3" className="mobile:px-8 mobile:pt-4">
          Artikel Depok Kita
        </Header>
        <Body preset="p3" className="mobile:max-w-[260px] mobile:pl-8">
          Temukan cerita, momen, dan kenangan dari penulis tentang Depok Kita
          2022
        </Body>
        <div className="flex justify-center mobile:p-6">
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
              className="mobile:max-w-[160px]"
            >
              Cari Artikel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
