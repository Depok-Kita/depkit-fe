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
            <Body windowSize={windowSize} preset="p3" presetTablet="p2">
              Sejatinya, menyumbahkan sebagian darah untuk disalurkan kepada
              yang membutuhkan akan menjadi sesuatu hal yang berarti dalam
              kehidupan sosial bermasyarakat. Pada tahun ini, Depok Kita 2022
              bekerja sama dengan UTD PMI Kota Depok untuk melaksanakan kegiatan
              donor darah yang bertujuan dalam membuka akses pelayanan donor
              darah di Kampung Lio Depok, sehingga akan semakin banyak
              masyarakat yang peduli akan pentingnya melakukan donor darah bagi
              kesehatan diri sendiri dan bagi kehidupan mereka yang membutuhkan
            </Body>
          </div>
        </Card>
      </SectionBox>
    </div>
  );
};
