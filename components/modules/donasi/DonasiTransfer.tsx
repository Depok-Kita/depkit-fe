import { Card, Body } from "@components";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import React from "react";
import { TRANSFER_PERSON } from "@constants";
import { v4 as uuid } from "uuid";

export const DonasiTransfer = () => {
  return (
    <div className="flex items-center gap-[14px]">
      {TRANSFER_PERSON.map((person) => (
        <Card
          preset="light"
          className="font-jakarta-sans p-4 rounded-[5px]"
          key={uuid()}
        >
          <Body preset="p2" className="text-denim-light text-[12px]">
            {person.bank}
          </Body>
          <div className="flex gap-1 text-black items-center">
            <Body preset="p3" className="text-[8px]">
              {person.number}
            </Body>
            <DocumentDuplicateIcon width={10} />
          </div>
          <Body
            preset="p3"
            className="text-black font-light text-[6px] truncate"
          >
            a.n {person.name}
          </Body>
        </Card>
      ))}
    </div>
  );
};
