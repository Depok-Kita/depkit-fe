import React from "react";

import { Header } from "@components";
import { Box, VStack } from "@chakra-ui/react";
import { useWindowSize } from "@hooks";

type CardProps = {
  className?: string;

  icon?: React.SVGAttributes<SVGElement>;
  padding?: string;
  preset: "dark" | "light";
  children?: React.ReactNode;
  [props: string]: any;
};

export const Card = ({
  children,
  className,
  preset,
  padding,
  icon,
  ...props
}: CardProps) => {
  const { width } = useWindowSize();
  return (
    <Box
      bgGradient={
        preset === "dark"
          ? "linear(to-b, #213356, #0C182F)"
          : "linear(to-b, #FFFFFF, #F2FAFE)"
      }
      className={`transition-all gap-2 rounded-3xl shadow-lg ${
        preset === "dark" ? "shadow-denim-dark" : "shadow-powder"
      } 
      ${padding ? padding : "p-10"}
      ${className}`}
      {...props}
    >
      <VStack alignItems="start">
        {icon ? <>{icon}</> : null}

        <Box>
          <Header
            preset={width >= 1280 ? "h4" : width >= 768 ? "h5" : "h6"}
            className={`${
              preset === "dark" ? "text-powder" : "text-denim-light"
            }`}
          >
            {children}
          </Header>
        </Box>
      </VStack>
    </Box>
  );
};
