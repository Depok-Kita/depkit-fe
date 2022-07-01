type CardStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  hover: string;
  disabled: string;
};

type CardPresetProps = {
  [key: string]: CardStyleProps;
};

export const CARD_PRESETS: CardPresetProps = {
  "xl-dark": {
    border: "rounded-3xl",
    borderWidth: "border-2  ",
    color: "bg-danger-dark active:bg-danger-light",
    hover: "hover:shadow-xl shadow-dark-danger",
    text: "text-totalwhite",
    borderColor: "border-danger-dark active:border-danger-dark/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
  "xl-light": {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-totalwhite active:bg-powder",
    hover: "hover:shadow-lg hover:shadow-powder",
    text: "text-dark-denim",
    borderColor: "border-totalwhite active:border-totalwhite/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
  "l-dark": {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-transparent active:bg-powder/60",
    hover: "hover:bg-powder/60",
    text: "text-totalwhite",
    borderColor: "border-powder active:border-powder/0",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-denim-dark",
  },
  "l-light": {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-transparent active:bg-denim-light/40",
    hover: "hover:bg-denim-light/40",
    text: "text-denim-dark",
    borderColor: "border-denim-light active:border-denim-light/0",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-totalwhite",
  },
  "m-dark": {
    border: "rounded-3xl",
    borderWidth: "border-2  ",
    color: "bg-danger-dark active:bg-danger-light",
    hover: "hover:shadow-xl shadow-dark-danger",
    text: "text-totalwhite",
    borderColor: "border-danger-dark active:border-danger-dark/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
  "m-light": {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-totalwhite active:bg-powder",
    hover: "hover:shadow-lg hover:shadow-powder",
    text: "text-dark-denim",
    borderColor: "border-totalwhite active:border-totalwhite/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
  "s-dark": {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-transparent active:bg-powder/60",
    hover: "hover:bg-powder/60",
    text: "text-totalwhite",
    borderColor: "border-powder active:border-powder/0",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-denim-dark",
  },
  "s-light": {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-transparent active:bg-denim-light/40",
    hover: "hover:bg-denim-light/40",
    text: "text-denim-dark",
    borderColor: "border-denim-light active:border-denim-light/0",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-totalwhite",
  },
  "xs-dark": {
    border: "rounded-3xl",
    borderWidth: "border-2  ",
    color: "bg-danger-dark active:bg-danger-light",
    hover: "hover:shadow-xl shadow-dark-danger",
    text: "text-totalwhite",
    borderColor: "border-danger-dark active:border-danger-dark/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
  "xs-light": {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-totalwhite active:bg-powder",
    hover: "hover:shadow-lg hover:shadow-powder",
    text: "text-dark-denim",
    borderColor: "border-totalwhite active:border-totalwhite/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
};
