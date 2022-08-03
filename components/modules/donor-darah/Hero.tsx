import Image from "next/image";
import BgMobile from "@images/donor-darah-hero-bg-mobile.svg";
import {
  HeaderResponsive as Header,
  BodyResponsive as Body,
  Button,
  useWindowSize,
  SectionBox,
} from "@components";

export const Hero = () => {
  const windowSize = useWindowSize();
  return (
    <div className="bg-powder-light">
      <SectionBox className=" h-[40rem] pt-32 relative flex flex-col tablet:flex-row tablet:justify-between tablet:items-center">
        <BgMobile className="scale-[80%] mobile:scale-100 tablet:scale-[150%] " />
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
      </SectionBox>
    </div>
  );
};
