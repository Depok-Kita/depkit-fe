import BgMobile from "@images/donor-darah-hero-bg-mobile.svg";
import {
  HeaderResponsive as Header,
  BodyResponsive as Body,
  Button,
  useWindowSize,
  SectionBox,
} from "@components";
import { scrollToElement } from "@utils";

export const Hero = () => {
  const windowSize = useWindowSize();
  return (
    <div className="bg-powder-light">
      <SectionBox className=" h-screen pt-32  mobile:flex tablet:grid tablet:grid-cols-2 flex-col desktop:gap-0 tablet:gap-20 desktop:justify-start tablet:items-center w-full ">
        <BgMobile className="scale-[80%] mobile:scale-100 tablet:scale-[150%] desktop:scale-[200%] desktop:left-32 tablet:left-16 mobile:left-0 relative " />
        <div className="px-8 py-6">
          <Header
            windowSize={windowSize}
            preset="h4"
            presetTablet="h3"
            presetDesktop="h2"
            className="leading-tight"
            decorative
          >
            Donor Darah
          </Header>
          <Header
            windowSize={windowSize}
            preset="h4"
            presetTablet="h3"
            presetDesktop="h2"
            className="leading-tight text-cerulean"
          >
            Depok Kita
          </Header>
          <Body windowSize={windowSize} preset="b2" className="mt-2">
            dd/mm/yyyy - dd/mm/yyyy
          </Body>
          <Button
            className="mt-4"
            preset="primaryDark"
            onClick={() => scrollToElement("sop")}
          >
            Registrasi Pendonor
          </Button>
        </div>
      </SectionBox>
    </div>
  );
};
