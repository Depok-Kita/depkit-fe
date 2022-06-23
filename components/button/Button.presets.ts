type ButtonStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  hover: string;
  disabled: string;
};

type ButtonPresetProps = {
  [key: string]: ButtonStyleProps;
};

export const BUTTON_PRESETS: ButtonPresetProps = {
  primaryDark: {
    border: "rounded-lg",
    borderWidth: "border-2",
    color: "bg-denim-dark active:bg-denim-light",
    hover: "hover:shadow-xl shadow-dark-denim",
    text: "text-totalwhite",
    borderColor: "border-denim-dark active:border-denim-dark/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
  primaryLight: {
    border: "rounded-lg",
    borderWidth: "border-2",
    color: "bg-totalwhite active:bg-powder",
    hover: "hover:shadow-lg hover:shadow-powder",
    text: "text-dark-denim",
    borderColor: "border-totalwhite active:border-totalwhite/0",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
  },
  secondaryDark: {
    border: "rounded-lg",
    borderWidth: "border-2",
    color: "bg-transparent active:bg-powder/60",
    hover: "hover:bg-powder/60",
    text: "text-totalwhite",
    borderColor: "border-powder active:border-powder/0",
    disabled:
      "disabled:border-grey disabled:text-grey disabled:bg-denim-dark disabled:hover:bg-transparent",
  },
  secondaryLight: {
    border: "rounded-lg",
    borderWidth: "border-2",
    color: "bg-transparent active:bg-denim-light/40",
    hover: "hover:bg-denim-light/40",
    text: "text-denim-dark",
    borderColor: "border-denim-light active:border-denim-light/0",
    disabled:
      "disabled:border-grey disabled:text-grey disabled:bg-totalwhite disabled:hover:bg-transparent",
  },
  tertiaryDark: {
    border: "rounded-lg",
    borderWidth: "none",
    color: "bg-transparent",
    hover: "hover:text-cerulean hover:bg-transparent ",
    text: "text-denim-dark active:text-denim-dark/60",
    borderColor: "",
    disabled: "disabled:text-grey",
  },
  tertiaryLight: {
    border: "rounded-lg",
    borderWidth: "none",
    color: "bg-transparent",
    hover: "hover:text-cerulean hover:bg-transparent",
    text: "text-totalwhite active:text-totalwhite/60",
    borderColor: "",
    disabled: "disabled:text-grey",
  },
  linkDark: {
    border: "rounded-lg",
    borderWidth: "none",
    color: "bg-transparent",
    hover: "hover:no-underline",
    text: "text-denim-dark underline underline-offset-1 active:no-underline",
    borderColor: "",
    disabled: "disabled:text-grey disabled:hover:underline",
  },
  linkLight: {
    border: "rounded-lg",
    borderWidth: "none",
    color: "bg-transparent",
    hover: "hover:no-underline",
    text: "text-totalwhite underline underline-offset-1 active:no-underline",
    borderColor: "",
    disabled: "disabled:text-grey disabled:hover:underline",
  },
};
