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
    <div className="flex items-center gap-[14px] justify-evenly">
      {TRANSFER_PERSON.map((person) => (
        <Card
          preset="light"
          className="font-jakarta-sans p-4 desktop:p-7 rounded-[5px] tablet:rounded-[11px] desktop:rounded-[20px]"
          key={uuid()}
        >
          <Body
            preset={width >= 768 ? "b1" : "p2"}
            className="text-denim-light text-[12px] tablet:text-[20px]"
          >
            {person.bank}
          </Body>
          <div className="flex gap-1 tablet:gap-2 text-black items-center">
            <Body
              preset={width >= 768 ? "b2" : "p3"}
              className="text-[8px] tablet:text-[16px]"
            >
              {person.number}
            </Body>
            <DocumentDuplicateIcon
              width={width >= 768 ? 20 : 10}
              onClick={() => {
                navigator.clipboard.writeText(person.number);
                copiedToast();
              }}
              className="cursor-pointer"
            />
          </div>
          <Body
            preset="p3"
            className="text-black font-light text-[6px] tablet:text-[16px] truncate"
          >
            a.n {person.name}
          </Body>
        </Card>
      ))}
    </div>
  );
};
