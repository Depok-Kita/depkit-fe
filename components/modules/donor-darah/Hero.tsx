import Image from "next/image";
import BgMobile from "@images/donor-darah-hero-bg-mobile.svg";
import {
  HeaderResponsive as Header,
  BodyResponsive as Body,
  Button,
  useWindowSize,
} from "@components";

export const Hero = () => {
  const windowSize = useWindowSize();
  return (
    <div className="bg-powder-light h-[40rem] pt-32 relative">
      <BgMobile className="z-0" />
      <div className="px-8 py-6">
        <Header windowSize={windowSize} preset="h3" className="leading-tight">
          Donor Darah
          <br />
          <span className="text-cerulean">Depok Kita</span>
        </Header>
        <Body windowSize={windowSize} preset="b2" className="mt-2">
          dd/mm/yyyy - dd/mm/yyyy
        </Body>
        <Button className="mt-4" preset="primaryDark">
          <a href="#sop">Registrasi Pendonor</a>
        </Button>
      </div>
    </div>
  );
};
