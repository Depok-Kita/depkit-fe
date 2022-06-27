import Image from "next/image";
import logo from "@images/depkit-logo-2.png";
import IconInstagram from "@icons/ic_instagram.svg";
import IconLinkedin from "@icons/ic_linkedin.svg";
import { Header, Body } from "@components/typography";
import NextLink from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};
/** custom styled NextLink*/
const Link = ({ href, children }: LinkProps) => {
  return (
    <NextLink className=" " href={href}>
      <span className="cursor-pointer hover:text-cerulean">{children}</span>
    </NextLink>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-denim-dark p-6">
      <div className="flex flex-col content-center justify-center text-powder text-center">
        <div className="relative w-auto h-[8vw] pb-6">
          <Image
            src={logo}
            alt="logo depkit"
            className="object-contain"
            layout="fill"
          />
        </div>
        <Header preset="h2" className="mb-3">
          Depok Kita
        </Header>
        <Body preset="p2" className="mb-6">
          <span className="hidden md:inline">
            Sebuah program pengabdian masyarakat berbasis Community Service di
            Depok. <br />
          </span>
          Departemen Sosial Masyarakat BEM UI 2022
        </Body>
        <div className="px-[3%]">
          <div className="w-full h-[1px] bg-cerulean mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 px-4">
          <div className="hidden md:flex md:flex-col lg:flex-row gap-4 lg:gap-[4vw] content-center">
            <Link href="">Tentang Kami</Link>
            <Link href="">Struktur Organisasi</Link>
            <Link href="">Galeri</Link>
            <Link href="">Kontak</Link>
          </div>
          <div className="flex justify-center gap-4">
            <Link href="https://www.instagram.com/depokkita.ui/">
              <IconInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/depok-kita-4b8312243">
              <IconLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
