import React from "react";
import {
  ExclamationIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

type ToastStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  hover: string;
  disabled: string;
  image: React.SVGAttributes<SVGElement>;
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
    image: <ExclamationIcon className="w-6 h-6" />,
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
    image: <ExclamationCircleIcon className="w-6 h-6" />,
  },
  success: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-success-dark active:bg-success-dark bg-opacity-20",
    hover: "hover:shadow-xl hover:shadow-success-dark",
    text: "text-success-dark",
    borderColor: "border-success-dark active:border-success-dark",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-denim-dark",
    image: <CheckCircleIcon className="w-6 h-6" />,
  },
  info: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-cerulean active:bg-cerulean bg-opacity-20",
    hover: "hover:shadow-xl hover:shadow-cerulean",
    text: "text-cerulean",
    borderColor: "border-cerulean active:border-cerulean",
    disabled: "disabled:border-grey disabled:text-grey disabled:bg-totalwhite",
    image: <InformationCircleIcon className="w-6 h-6" />,
  },
};

type ToastToggleProps = {
  visibility: string;
};

type ToastActiveProps = {
  [key: string]: ToastToggleProps;
};

export const TOAST_TOGGLE: ToastActiveProps = {
  on: {
    visibility: "visible",
  },
  off: {
    visibility: "invisible",
  },
};
