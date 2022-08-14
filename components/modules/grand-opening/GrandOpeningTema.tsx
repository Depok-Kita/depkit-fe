import { Header, Body, useWindowSize } from "@components";
export const GrandOpeningTema = () => {
  const { width } = useWindowSize();
  return (
    <div className="destop:py-16 tablet:py-10 mobile:py-6 px-5 w-full flex items-center justify-center  bg-denim-dark">
      <div>
        <Body
          preset={width >= 1280 ? "p1" : width >= 768 ? "p2" : "p3"}
          className="text-cerulean text-center"
        >
          Tema Grand Opening Depok Kita 2022
        </Body>
        <Header
          preset={width >= 1280 ? "h3" : width >= 768 ? "h4" : "h6"}
          className="text-powder-light desktop:mt-6 tablet:mt-4 mobile:mt-2 text-center"
        >
          Zero Waste Based Business and the Impact for the Environment
        </Header>
      </div>
    </div>
  );
};
