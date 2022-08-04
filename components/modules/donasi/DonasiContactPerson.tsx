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
    <div className="bg-denim-light p-8 tablet:px-20 tablet:py-14 desktop:px-[380px] space-y-[14px] tablet:space-y-[30px]">
      <Body
        preset={width >= 1280 ? "p1" : width >= 768 ? "p2" : "p3"}
        className="text-powder"
      >
        Dengan menyisihkan sedikit rezeki yang kita miliki, kita dapat
        berkontribusi besar dan bermanfaat bagi warga binaan. Jika ada
        pertanyaan, silakan hubungin narahubung berikut.
      </Body>
      <div className="flex gap-2 items-center justify-center">
        <Divider
          orientation="vertical"
          borderColor={"#88BFE8"}
          borderWidth={width >= 1280 ? 3 : width >= 768 ? 1.5 : 1}
          height={width >= 1280 ? 10 : width >= 768 ? 8 : 6}
          bgColor={"#88BFE8"}
        />
        <Header
          preset={width >= 768 ? "h3" : "h5"}
          className="text-powder-light desktop:text-[48px]"
        >
          Narahubung
        </Header>
      </div>
      <div className="flex justify-center items-center gap-[14px] desktop:gap-[47px]">
        {DONASI_CONTACT_PERSON.map((person) => (
          <Card
            preset="dark"
            className="p-5 desktop:p-10 rounded-[5px] tablet:rounded-[11px] desktop:rounded-[20px]"
            key={uuid()}
          >
            <Body
              preset="p2"
              className="text-powder text-[12px] tablet:text-[20px] font-light"
            >
              {person.name}
            </Body>
            <div className="flex gap-1 tablet:gap-2 text-cerulean items-center">
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
