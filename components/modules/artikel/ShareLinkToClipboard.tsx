import { useState } from "react";
import { ShareIcon, ClipboardCheckIcon } from "@heroicons/react/outline";
import { Toast } from "@components/toast";

type ShareLinkToClipboardProps = {
  className?: string;
  link: string;
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
    setTimeout(() => setIsCopied(false), 6000);
  };

  const WEBSITE_URL = `https://depokkita.com`;
  if (!isCopied) {
    return (
      <ShareIcon
        className={className + " w-4 absolute bottom-4 hover:cursor-pointer"}
        onClick={shareClickHandler}
      />
    );
  } else {
    return (
      <ClipboardCheckIcon
        className={className + " w-5 absolute bottom-4 hover:cursor-pointer"}
        onClick={() => {
          navigator.clipboard.writeText(WEBSITE_URL + "/artikel/" + link);
        }}
      />
    );
  }
};
