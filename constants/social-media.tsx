import IconInstagram from "@icons/ic_instagram.svg";
import IconLinkedin from "@icons/ic_linkedin.svg";
import IconTiktok from "@icons/ic_tiktok.svg";

type SocialMedia = {
  name: string;
  url: string;
  icon: React.ReactElement;
};

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/depokkita.ui/",
    icon: <IconInstagram />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/depok-kita-4b8312243",
    icon: <IconLinkedin />,
  },
  {
    name: "Tiktok",
    url: "https://vt.tiktok.com/ZSdwXk2da/",
    icon: <IconTiktok />,
  },
];

export default SOCIAL_MEDIA;
