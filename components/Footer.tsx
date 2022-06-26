import Image from "next/image";
import logo from "@images/depkit-logo-2.png";

export const Footer = () => {
  return (
    <div className="bg-denim-dark p-6">
      <div className="flex flex-col content-center">
        <div className="relative w-auto h-[8vw]">
          <Image
            src={logo}
            alt="logo depkit"
            className="object-contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};
