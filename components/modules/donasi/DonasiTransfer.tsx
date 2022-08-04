import { Card, Body, Toast } from "@components";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import React from "react";
import { TRANSFER_PERSON } from "@constants";
import { v4 as uuid } from "uuid";
import { useWindowSize } from "@hooks";

export const DonasiTransfer = () => {
  const { width } = useWindowSize();
  const copiedToast = Toast({
    preset: "info",
    message: "Nomor telah disalin",
  });
  return (
    <div className="flex flex-col tablet:flex-row items-center gap-[14px] desktop:gap-[47px] tablet:justify-evenly">
      {TRANSFER_PERSON.map((person) => (
        <Card
          preset="light"
          className="p-4 desktop:p-7 rounded-[5px] tablet:rounded-[11px] desktop:rounded-[20px] w-[60%]"
          key={uuid()}
        >
          <Body
            preset={width < 768 || width >= 1280 ? "b1" : "b2"}
            className="text-denim-light"
          >
            {person.bank}
          </Body>
          <div className="flex gap-1 tablet:gap-2 text-black items-center">
            <Body preset={width < 768 || width >= 1280 ? "b2" : "b3"}>{person.number}</Body>
            <DocumentDuplicateIcon
              width={width >= 768 ? 20 : 15}
              onClick={() => {
                navigator.clipboard.writeText(person.number);
                copiedToast();
              }}
              className="cursor-pointer"
            />
          </div>
          <Body
            preset="p3"
            className="text-black truncate"
          >
            a.n {person.name}
          </Body>
        </Card>
      ))}
    </div>
  );
};
