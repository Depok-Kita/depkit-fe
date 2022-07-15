import { Body, Button } from "@components";
import { ChatIcon, MailIcon } from "@heroicons/react/outline";

export const SponsorContactPerson = () => {
  return (
    <div className="flex justify-center bg-powder-light items-center pb-20">
      <div className="grid-cols-1">
        <div className="flex justify-center pb-8">
          <Body
            preset="p1"
            className="text-center mobile:text-[20px] mobile:max-w-[220px]"
          >
            for Depok Kita partnership purposes, please kindly contact:
          </Body>
        </div>
        <Button preset="secondaryLight" className="w-[205px] border-none">
          <div className="flex gap-2 items-center">
            <ChatIcon className="mobile:w-7" />
            <Body preset="b1" className="mobile:text-[14px]">
              rasyid doe
            </Body>
          </div>
        </Button>
        <Button preset="secondaryLight" className="w-[285px] border-none">
          <div className="flex gap-2 items-center">
            <MailIcon className="mobile:w-7" />
            <Body preset="b1" className="mobile:text-[14px]">
              rasyiddoe@gmail.com
            </Body>
          </div>
        </Button>
      </div>
    </div>
  );
};
