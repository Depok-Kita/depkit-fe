import {
  HeaderResponsive as Header,
  Card,
  BodyResponsive as Body,
  SectionBox,
  useWindowSize,
  HeadingLine,
} from "@components";

import Decor from "@images/donor-darah-decor-2.svg";

export const TujuanSection = () => {
  const windowSize = useWindowSize();
  return (
    <div className="relative bg-powder">
      <Decor className="hidden desktop:block absolute top-0 left-0 " />
      <Decor className="hidden desktop:block absolute bottom-0 right-0 -scale-x-100" />
      <SectionBox className="desktop:pt-20 desktop:pb-36 w-[min(64rem,80%)]">
        <div className="mb-8 tablet:mb-10">
          <Header
            windowSize={windowSize}
            preset="h5"
            presetTablet="h3"
            presetDesktop="h2"
            className="text-center"
          >
            Tujuan
          </Header>
          <HeadingLine className="mx-auto" />
        </div>
        <Card preset="light">
          <div>
            <Header windowSize={windowSize} preset="h6" presetTablet="h5">
              Lorem ipsum dolor sit amet
            </Header>
            <Body windowSize={windowSize} preset="p3" presetTablet="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat risus eu mi egestas, non rutrum mauris laoreet. Ut eget
              dignissim metus, non vehicula dolor. Praesent at magna vel velit
              accums
            </Body>
          </div>
        </Card>
      </SectionBox>
    </div>
  );
};
