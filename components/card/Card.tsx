import React from "react";
import { CARD_PRESETS } from "./Card.presets";
import { Header } from "@components";
type CardProps = {
  className?: string;

  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

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
    <button
      className={`transition-all flex justify-center items-center gap-2 
      ${CARD_PRESETS[preset].text} md:text-base text-sm font-semibold 
      ${CARD_PRESETS[preset].border} 
      ${border ? border : CARD_PRESETS[preset].borderWidth} 
      ${border ? border : CARD_PRESETS[preset].borderColor} 
      ${CARD_PRESETS[preset].hover} 
      ${CARD_PRESETS[preset].color} 
      ${padding ? padding : "py-3 px-5"} 
      ${CARD_PRESETS[preset].disabled} 
      ${className}`}
      {...props}
    >
      {leftIcon ? <>{leftIcon}</> : null}
      <Header preset="h6">{children}</Header>
      {rightIcon ? <>{rightIcon}</> : null}
    </button>
  );
};
