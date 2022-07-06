type ToastStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  hover: string;
  disabled: string;
  image: string;
};

type ToastPresetProps = {
  [key: string]: ToastStyleProps;
};

export const TOAST_PRESETS: ToastPresetProps = {
  error: {
    border: "rounded-3xl",
    borderWidth: "border-2  ",
    color: "bg-danger-dark active:bg-danger-light bg-opacity-20",
    hover: "hover:shadow-xl hover:shadow-danger-dark",
    text: "text-danger-dark",
    borderColor: "border-danger-dark active:border-danger-dark",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    image:
      '<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0759 6.13231L25.2307 23.6774H4.92104L15.0759 6.13231ZM15.0759 0.751465L0.241455 26.3745H29.9103L15.0759 0.751465ZM16.4244 19.6316H13.7273V22.3288H16.4244V19.6316ZM16.4244 11.5401H13.7273V16.9345H16.4244V11.5401Z" fill="#DB4333"/></svg>',
  },
  warning: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-warning-dark active:bg-warning-light bg-opacity-20",
    hover: "hover:shadow-xl hover:shadow-warning-dark",
    text: "text-warning-dark",
    borderColor: "border-warning-dark active:border-warning-dark",
    disabled:
      "disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none",
    image:
      '<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0759 6.13231L25.2307 23.6774H4.92104L15.0759 6.13231ZM15.0759 0.751465L0.241455 26.3745H29.9103L15.0759 0.751465ZM16.4244 19.6316H13.7273V22.3288H16.4244V19.6316ZM16.4244 11.5401H13.7273V16.9345H16.4244V11.5401Z" fill="#DB4333"/></svg>',
  },
  success: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-success-dark active:bg-success-dark bg-opacity-20",
    hover: "hover:shadow-xl hover:shadow-success-dark",
    text: "text-success-dark",
    borderColor: "border-success-dark active:border-success-dark",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-denim-dark",
    image:
      '<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0759 6.13231L25.2307 23.6774H4.92104L15.0759 6.13231ZM15.0759 0.751465L0.241455 26.3745H29.9103L15.0759 0.751465ZM16.4244 19.6316H13.7273V22.3288H16.4244V19.6316ZM16.4244 11.5401H13.7273V16.9345H16.4244V11.5401Z" fill="#DB4333"/></svg>',
  },
  info: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-cerulean active:bg-cerulean bg-opacity-20",
    hover: "hover:shadow-xl hover:shadow-cerulean",
    text: "text-cerulean",
    borderColor: "border-cerulean active:border-cerulean",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-totalwhite",
    image:
      '<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0759 6.13231L25.2307 23.6774H4.92104L15.0759 6.13231ZM15.0759 0.751465L0.241455 26.3745H29.9103L15.0759 0.751465ZM16.4244 19.6316H13.7273V22.3288H16.4244V19.6316ZM16.4244 11.5401H13.7273V16.9345H16.4244V11.5401Z" fill="#DB4333"/></svg>',
  },
};
