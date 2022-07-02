import Image from "next/image";
import logo from "@images/depkit-logo-2.png";
import { Header, Body } from "@components/typography";
import NextLink from "next/link";
import { NAV_ROUTES, SOCIAL_MEDIA } from "@constants";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};
/** custom styled NextLink*/
const Link = ({ href, children }: LinkProps) => {
  return (
    <NextLink className=" " href={href}>
      <a className="cursor-pointer hover:text-cerulean">{children}</a>
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
          <span className="hidden tablet:inline">
            Sebuah program pengabdian masyarakat berbasis Community Service di
            Depok. <br />
          </span>
          Departemen Sosial Masyarakat BEM UI 2022
        </Body>
        <div className="px-[3%]">
          <div className="w-full h-[1px] bg-cerulean mb-6"></div>
        </div>

        <div className="flex flex-col desktop:flex-row justify-between gap-4 px-4">
          <div className="hidden tablet:flex tablet:flex-col desktop:flex-row gap-4 desktop:gap-[4vw] content-center">
            {NAV_ROUTES.map((route) => (
              <Link key={route.name} href={route.url}>
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {SOCIAL_MEDIA.map((social) => (
              <Link key={social.name} href={social.url}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
