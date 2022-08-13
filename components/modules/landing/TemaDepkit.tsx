import { HeaderResponsive, BodyResponsive, useWindowSize } from "@components";
export const TemaDepkit = () => {
  const windowSize = useWindowSize();
  return (
    <div className="bg-denim-dark desktop:py-20 mobile:py-10 tablet:py-16">
      <BodyResponsive
        preset="p3"
        presetTablet="p2"
        presetDesktop="p1"
        windowSize={windowSize}
        className="text-cerulean"
      >
        Tema Depok Kita 2022
      </BodyResponsive>
      <HeaderResponsive
        preset="h5"
        presetTablet="h3"
        presetDesktop="h2"
        windowSize={windowSize}
        className="text-powder-light mt-2"
      >
        Beragam Aksi untuk Wujudkan Asa
      </HeaderResponsive>
    </div>
  );
};
