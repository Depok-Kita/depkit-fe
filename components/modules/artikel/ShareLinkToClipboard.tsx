import { ShareIcon } from "@heroicons/react/outline";

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
  const WEBSITE_URL = `http://localhost:3000`;
  return (
    <ShareIcon
      className={className + " w-4 absolute bottom-4 right-24"}
      onClick={() => {
        navigator.clipboard.writeText(WEBSITE_URL + "/artikel/" + link);
      }}
    />
  );
};
