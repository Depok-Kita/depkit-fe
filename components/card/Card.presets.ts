import React from "react";
import { InboxIcon } from "@heroicons/react/outline";

type CardStyleProps = {
  text: string;
  font: string;
  border: string;
  hover: string;
  disabled: string;
  bgGradient: string;
  width: string;
  height: string;
};

type CardPresetProps = {
  [key: string]: CardStyleProps;
};

export const CARD_PRESETS: CardPresetProps = {
  "xl-dark": {
    font: "h4",
    border: "rounded-3xl",
    hover: "hover:shadow-xl shadow-dark-danger",
    text: "text-totalwhite",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    bgGradient: "linear(to-b, #213356, #0C182F)",
    width: "40%",
    height: "200px",
    image: <InboxIcon />,
  },
  "xl-light": {
    font: "h4",
    border: "rounded-3xl",
    hover: "hover:shadow-lg hover:shadow-powder",
    text: "text-denim-dark",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    bgGradient: "linear(to-b, #FFFFFF, #F2FAFE)",
    width: "40%",
    height: "200px",
  },
  "l-dark": {
    font: "h4",
    border: "rounded-3xl",
    hover: "hover:bg-powder/60",
    text: "text-totalwhite",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-denim-dark",
    bgGradient: "linear(to-b, #213356, #0C182F)",
    width: "20%",
    height: "400px",
  },
  "l-light": {
    font: "h4",
    border: "rounded-3xl",
    hover: "hover:bg-denim-light/40",
    text: "text-denim-dark",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-totalwhite",
    bgGradient: "linear(to-b, #FFFFFF, #F2FAFE)",
    width: "20%",
    height: "400px",
  },
  "m-dark": {
    font: "h5",
    border: "rounded-3xl",
    hover: "hover:shadow-xl shadow-dark-danger",
    text: "text-totalwhite",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    bgGradient: "linear(to-b, #213356, #0C182F)",
    width: "15%",
    height: "350px",
  },
  "m-light": {
    font: "h5",
    border: "rounded-3xl",
    hover: "hover:shadow-lg hover:shadow-powder",
    text: "text-dark-denim",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    bgGradient: "linear(to-b, #FFFFFF, #F2FAFE)",
    width: "15%",
    height: "350px",
  },
  "s-dark": {
    font: "h5",
    border: "rounded-3xl",
    hover: "hover:bg-powder/60",
    text: "text-totalwhite",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-denim-dark",
    bgGradient: "linear(to-b, #213356, #0C182F)",
    width: "35%",
    height: "150px",
  },
  "s-light": {
    font: "h5",
    border: "rounded-3xl",
    hover: "hover:bg-denim-light/40",
    text: "text-denim-dark",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-totalwhite",
    bgGradient: "linear(to-b, #FFFFFF, #F2FAFE)",
    width: "35%",
    height: "150px",
  },
  "xs-dark": {
    font: "h6",
    border: "rounded-3xl",
    hover: "hover:shadow-xl shadow-dark-danger",
    text: "text-totalwhite",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    bgGradient: "linear(to-b, #213356, #0C182F)",
    width: "10%",
    height: "250px",
  },
  "xs-light": {
    font: "h6",
    border: "rounded-3xl",
    hover: "hover:shadow-lg hover:shadow-powder",
    text: "text-dark-denim",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    bgGradient: "linear(to-b, #FFFFFF, #F2FAFE)",
    width: "10%",
    height: "250px",
  },
};
