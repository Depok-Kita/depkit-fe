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
  image: React.SVGAttributes<SVGElement>;
};

type ToastPresetProps = {
  [key: string]: ToastStyleProps;
};

export const TOAST_PRESETS: ToastPresetProps = {
  error: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-danger-dark/20 active:bg-danger-light backdrop-blur-sm",
    text: "text-danger-dark",
    borderColor: "border-danger-dark active:border-danger-dark",
    image: <ExclamationIcon className="w-6 h-6" />,
  },
  warning: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-warning-dark/20 active:bg-warning-light backdrop-blur-sm",
    text: "text-warning-dark",
    borderColor: "border-warning-dark active:border-warning-dark",
    image: <ExclamationCircleIcon className="w-6 h-6" />,
  },
  success: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-success-dark/20 active:bg-success-dark backdrop-blur-sm",
    text: "text-success-dark",
    borderColor: "border-success-dark active:border-success-dark",
    image: <CheckCircleIcon className="w-6 h-6" />,
  },
  info: {
    border: "rounded-3xl",
    borderWidth: "border-2",
    color: "bg-cerulean/20 active:bg-cerulean backdrop-blur-sm",
    text: "text-cerulean",
    borderColor: "border-cerulean active:border-cerulean",
    image: <InformationCircleIcon className="w-6 h-6" />,
  },
};
