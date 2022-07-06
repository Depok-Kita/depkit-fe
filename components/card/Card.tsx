import React from "react";
import { CARD_PRESETS } from "./Card.presets";
import { Header } from "@components";
import { Box } from "@chakra-ui/react";
type CardProps = {
  className?: string;

  to?: string;

  padding?: string;
  border?: string;

  leftIcon?: React.SVGAttributes<SVGElement>;
  rightIcon?: React.SVGAttributes<SVGElement>;

  preset:
    | "xl-dark"
    | "xl-light"
    | "l-dark"
    | "l-light"
    | "m-dark"
    | "m-light"
    | "s-dark"
    | "s-light"
    | "xs-dark"
    | "xs-light";

  children?: React.ReactNode;
  [props: string]: any;
};

export const Card = ({
  children,
  className,
  preset,
  padding,
  border,
  leftIcon,
  rightIcon,
  ...props
}: CardProps) => {
  return (
    // using div (soon)
    <Box
      w={CARD_PRESETS[preset].width}
      h={CARD_PRESETS[preset].height}
      pb="14"
      px="10"
      bgGradient={CARD_PRESETS[preset].bgGradient}
      className={`transition-all flex justify-center items-center gap-2 
      ${CARD_PRESETS[preset].text} md:text-base text-sm font-semibold 
      ${CARD_PRESETS[preset].border} 
      ${CARD_PRESETS[preset].hover} 
      ${padding ? padding : "py-3 px-5"} 
      ${CARD_PRESETS[preset].disabled} 
      ${className}`}
      {...props}
    >
      {leftIcon ? <>{leftIcon}</> : null}
      <Header preset={CARD_PRESETS[preset].font}>{children}</Header>
      {rightIcon ? <>{rightIcon}</> : null}
    </Box>
  );
};
