import { Header, Button, useWindowSize } from "@components";
import { ChevronRightIcon } from "@heroicons/react/solid";
export const GrandOpeningHero = () => {
  const { width } = useWindowSize();
  return (
    <div className="h-screen w-full flex items-center justify-center  bg-powder-light">
      <div>
        <Header
          preset={width >= 1280 ? "h2" : width >= 768 ? "h3" : "h4"}
          decorative
          className="text-denim-dark "
        >
          Grand Opening <span className="text-cerulean">X</span> Talkshow
        </Header>
        <div className="flex justify-center mt-12">
          <Button
            preset="primaryDark"
            rightIcon={<ChevronRightIcon className="w-5 h-5 fill-powder" />}
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};
