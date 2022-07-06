import React from "react";
import { TOAST_PRESETS, TOAST_TOGGLE } from "./Toast.presets";
import { Header } from "@components";
import { XIcon } from "@heroicons/react/outline";
import { Box } from "@chakra-ui/react";

type ToastProps = {
  className?: string;

  to?: string;

  active: "on" | "off";

  padding?: string;
  border?: string;

  preset: "error" | "warning" | "success" | "info";

  children?: React.ReactNode;
  [props: string]: any;
};

export const Toast = ({
  children,
  className,
  preset,
  active,
  padding,
  border,
  leftIcon,
  rightIcon,
  ...props
}: ToastProps) => {
  return (
    // using div (soon)
    <Box
      w="50%"
      className={`transition-all flex justify-between items-center gap-2
      ${TOAST_PRESETS[preset].text} md:text-base text-sm font-semibold 
      ${TOAST_PRESETS[preset].border} 
      ${border ? border : TOAST_PRESETS[preset].borderWidth} 
      ${border ? border : TOAST_PRESETS[preset].borderColor} 
      ${TOAST_PRESETS[preset].hover} 
      ${TOAST_PRESETS[preset].color} 
      ${padding ? padding : "py-3 px-5"} 
      ${TOAST_TOGGLE[active].visibility}
      ${className}`}
      {...props}
    >
      <>
        {/* ICON */}
        {TOAST_PRESETS[preset].image}

        <Header preset="h6">{children}</Header>

        {/* CLOSE */}
        {/* CHANGE ON TO OFF */}
        <button onClick={() => TOAST_TOGGLE["off"]}>
          <XIcon className="h-6 w-6" />
        </button>
      </>
    </Box>
  );
};
