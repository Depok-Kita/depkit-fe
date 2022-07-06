import React from "react";
import { TOAST_PRESETS } from "./Toast.presets";
import { Header } from "@components";

type ToastProps = {
  className?: string;

  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  padding?: string;
  border?: string;

  leftIcon?: React.SVGAttributes<SVGElement>;
  rightIcon?: React.SVGAttributes<SVGElement>;

  preset: "error" | "warning" | "success" | "info";

  children?: React.ReactNode;
  [props: string]: any;
};

export const Toast = ({
  children,
  className,
  preset,
  padding,
  border,
  leftIcon,
  rightIcon,
  ...props
}: ToastProps) => {
  return (
    // using div (soon)
    <button
      className={`transition-all flex justify-center items-center gap-2 
      ${TOAST_PRESETS[preset].text} md:text-base text-sm font-semibold 
      ${TOAST_PRESETS[preset].border} 
      ${border ? border : TOAST_PRESETS[preset].borderWidth} 
      ${border ? border : TOAST_PRESETS[preset].borderColor} 
      ${TOAST_PRESETS[preset].hover} 
      ${TOAST_PRESETS[preset].color} 
      ${padding ? padding : "py-3 px-5"} 
      ${TOAST_PRESETS[preset].disabled} 
      ${className}`}
      {...props}
    >
      {/* ICON */}
      <img src={TOAST_PRESETS[preset].image} />

      {leftIcon ? <>{leftIcon}</> : null}
      <Header preset="h6" className="px-24">
        {children}
      </Header>
      {rightIcon ? <>{rightIcon}</> : null}

      {/* CLOSE */}
      <img src={TOAST_PRESETS[preset].image} />
    </button>
  );
};
