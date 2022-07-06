import React from "react";
import { CARD_PRESETS } from "./Card.presets";
import { Header } from "@components";
import { Box, VStack } from "@chakra-ui/react";
import { InboxIcon } from "@heroicons/react/outline";

type CardProps = {
  className?: string;

  to?: string;

  padding?: string;
  border?: string;

  vertical?: boolean;

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
  vertical,
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
      <VStack alignItems="start">
        <Box>
          <InboxIcon className="w-6 h-6" />
        </Box>
        <Box>
          <Header preset={CARD_PRESETS[preset].font}>{children}</Header>
        </Box>
      </VStack>
    </Box>
  );
};
