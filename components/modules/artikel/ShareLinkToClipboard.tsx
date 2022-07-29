import { useState } from "react";
import { ShareIcon, ClipboardCheckIcon } from "@heroicons/react/outline";
import { Toast } from "@components/toast";

type ShareLinkToClipboardProps = {
  className?: string;
  link?: any;
  children?: React.ReactNode;
};

export const ShareLinkToClipboard = ({
  children,
  className,
  link,
}: ShareLinkToClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const successToast = Toast({
    preset: "success",
    message: "Link berhasil disalin ke clipboard!",
  });

  const shareClickHandler = () => {
    navigator.clipboard.writeText(WEBSITE_URL + "/artikel/" + link);
    setIsCopied(true);
    successToast();
  };

  const WEBSITE_URL = `http://localhost:3000`;
  if (!isCopied) {
    return (
      <ShareIcon
        className={className + " w-4 absolute bottom-4 right-24"}
        onClick={shareClickHandler}
      />
    );
  } else {
    return (
      <ClipboardCheckIcon
        className={className + " w-5 absolute bottom-4 right-24"}
        onClick={() => {
          navigator.clipboard.writeText(WEBSITE_URL + "/artikel/" + link);
        }}
      />
    );
  }
};
