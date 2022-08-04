import { ReactNode } from "react";
import { WindowSize } from "@components/hooks/";
import { responsive } from "utils";

type HeaderPreset =
  | "decorative"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7";

type HeaderProps = {
  className?: string;
  preset: HeaderPreset;
  children: ReactNode;
  decorative?: boolean;
};

export const Header = ({
  className,
  preset,
  children,
  decorative,
}: HeaderProps) => {
  return (
    <h1
      className={`${
        preset === "h1"
          ? "font-bold text-[4rem]"
          : preset === "h2"
          ? "font-bold text-[3rem]"
          : preset === "h3"
          ? "font-bold text-[2rem]"
          : preset === "h4"
          ? "font-bold text-[1.5rem]"
          : preset === "h5"
          ? "font-bold text-[1.25rem]"
          : preset === "h6"
          ? "font-bold text-[1rem]"
          : "font-bold text-[0.75rem]"
      }
      ${decorative ? "tracking-[0.03em] decorative" : ""}
      ${className}`}
    >
      {children}
    </h1>
  );
};

interface HeaderResponsiveProps extends HeaderProps {
  presetTablet?: HeaderPreset;
  presetDesktop?: HeaderPreset;
  windowSize: WindowSize;
}

/** Responsive header that changes its preset according to viewport */
// see example in pages/arutala.tsx
export const HeaderResponsive = ({
  preset,
  presetTablet,
  presetDesktop,
  windowSize,
  ...props
}: HeaderResponsiveProps) => {
  const presetResponsive = responsive<HeaderPreset>(
    windowSize,
    preset,
    presetTablet,
    presetDesktop
  );
  return <Header preset={presetResponsive} {...props} />;
};
