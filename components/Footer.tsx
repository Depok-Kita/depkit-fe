import Image from "next/image";
import logo from "@images/depkit-logo-2.png";
import { Header, Body } from "@components/typography";

export const Footer = () => {
  return (
    <div className="bg-denim-dark p-6">
      <div className="flex flex-col content-center text-powder text-center">
        <div className="relative w-auto h-[8vw] pb-6">
          <Image
            src={logo}
            alt="logo depkit"
            className="object-contain"
            layout="fill"
          />
        </div>
        <Header preset="h2" className="pb-3">
          Depok Kita
        </Header>
        <Body preset="p2">
          <span className="hidden md:inline">
            Sebuah program pengabdian masyarakat berbasis Community Service di
            Depok. <br />
          </span>
          Departemen Sosial Masyarakat BEM UI 2022
        </Body>
      </div>
    </div>
  );
};
