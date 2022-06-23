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
    borderColor: "border-denim-dark active:border-denim-light",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey",
  },
  primaryLight: {
    border: "rounded-lg",
    borderWidth: "border-2",
    color: "bg-totalwhite active:bg-powder",
    hover: "hover:shadow-xl hover:shadow-totalwhite",
    text: "text-dark-denim",
    borderColor: "border-totalwhite",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey",
  },
  //edu
  secondaryDark: {
    border: "rounded-lg",
    borderWidth: "border-2",
    color: "bg-transparent",
    hover:
      "hover:border-primaryDark-hover hover:text-primaryDark-active hover:bg-transparent",
    text: "text-green-dark",
    borderColor: "border-green-dark",
    disabled:
      "disabled:border-primaryDark-disabled disabled:text-primaryDark-disabled",
  },
  //edu
  secondaryLight: {
    border: "rounded-lg",
    borderWidth: "border-2",
    color: "bg-transparent",
    hover:
      "hover:border-primaryLight-hover hover:text-primaryLight-hover hover:bg-transparent",
    text: "text-totalwhite",
    borderColor: "border-totalwhite",
    disabled:
      "disabled:border-primaryLight-disabled disabled:text-primaryLight-disabled",
  },
  tertiaryDark: {
    border: "rounded-lg",
    borderWidth: "none",
    color: "bg-transparent",
    hover: "hover:text-cerulean hover:bg-transparent ",
    text: "text-denim-dark active:text-powder",
    borderColor: "",
    disabled: "disabled:text-grey-soft",
  },
  tertiaryLight: {
    border: "rounded-lg",
    borderWidth: "none",
    color: "bg-transparent",
    hover: "hover:text-cerulean hover:bg-transparent",
    text: "text-totalwhite active:text-powder",
    borderColor: "",
    disabled: "disabled:text-grey-soft",
  },
  //tambahin link du
};
