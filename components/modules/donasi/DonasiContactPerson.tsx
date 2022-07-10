import { Divider } from "@chakra-ui/react";
import { Body, Header, Card } from "@components";
import { PhoneIcon } from "@heroicons/react/outline";
import { DONASI_CONTACT_PERSON } from "constants/donation-contact-person";
import { v4 as uuid } from "uuid";
import React from "react";
import { useWindowSize } from "@hooks";

export const DonasiContactPerson = () => {
  const { width } = useWindowSize();
  return (
    <div className="bg-denim-light p-8 tablet:p-16 space-y-[14px] tablet:space-y-[30px]">
      <Body preset={width >= 768 ? "p1" : "p3"} className="text-powder">
        Dengan menyisihkan sedikit rezeki yang kita miliki, kita dapat
        berkontribusi besar dan bermanfaat bagi warga binaan. Jika ada
        pertanyaan, silakan hubungin narahubung berikut.
      </Body>
      <div className="flex gap-2 items-center">
        <Divider
          orientation="vertical"
          borderColor={"#88BFE8"}
          borderWidth={1}
          height={width >= 768 ? 8 : 6}
          bgColor={"#88BFE8"}
        />
        <Header
          preset={width >= 768 ? "h3" : "h6"}
          className="text-powder-light"
        >
          Narahubung
        </Header>
      </div>
      <div className="flex items-center gap-[14px]">
        {DONASI_CONTACT_PERSON.map((person) => (
          <Card
            preset="light"
            className="font-jakarta-sans p-4 rounded-[5px]"
            key={uuid()}
          >
            <Body
              preset="p2"
              className="text-denim-light text-[12px] tablet:text-[20px] font-light"
            >
              {person.name}
            </Body>
            <div className="flex gap-1 tablet:gap-2 text-black items-center">
              <PhoneIcon width={width >= 768 ? 20 : 10} />
              <Body preset="p3" className="text-[8px] tablet:text-[16px]">
                {person.number}
              </Body>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
