type CardStyleProps = {
  text: string;
  font: string;
  border: string;
  hover: string;
  disabled: string;
  bgGradient: string;
  width: string;
  height: string;
  vertical: boolean;
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
    vertical: false,
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
    vertical: false,
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
    vertical: true,
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
    vertical: true,
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
    vertical: true,
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
    vertical: true,
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
    vertical: false,
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
    vertical: false,
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
    vertical: true,
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
    vertical: true,
  },
};
