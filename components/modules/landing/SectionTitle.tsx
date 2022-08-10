import { HeaderResponsive } from "@components/typography";
import { useWindowSize } from "@components";
type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export const SectionTitle = ({
  children,
  className,
  light,
}: SectionTitleProps) => {
  const windowSize = useWindowSize();
  return (
    <>
      {" "}
      <HeaderResponsive
        preset="h5"
        presetTablet="h3"
        presetDesktop="h2"
        windowSize={windowSize}
        className={
          " text-center " + className + " " + (light ? "text-totalwhite" : "")
        }
      >
        {children}
      </HeaderResponsive>
      <div className="flex justify-center desktop:mb-[50px] tablet:mb-7 mobile:mb-4">
        <div className="desktop:w-36 tablet:w-40 mobile:w-20 bg-cerulean desktop:h-1.5 mobile:h-1"></div>
      </div>
    </>
  );
};
