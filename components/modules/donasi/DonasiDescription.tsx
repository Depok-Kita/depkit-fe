import { Divider } from "@chakra-ui/react";
import { Header, Card, Body } from "@components";
import { useWindowSize } from "@hooks";
import React, { useState, useEffect } from "react";
import { DONASI_DESCRIPTION } from "@constants";
import { v4 as uuid } from "uuid";
import { ChevronDownIcon } from "@heroicons/react/outline";

export const DonasiDescription = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (width > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);
  return (
    <div className="space-y-[28px] desktop:space-y-[50px] p-10 tablet:p-16 desktop:px-40 wide:px-[350px] desktop:py-28 text-center bg-denim-light">
      <div className="flex justify-center items-center flex-col gap-[14px] desktop:gap-[25px]">
        <Header
          preset={width >= 1280 ? "h2" : width >= 768 ? "h3" : "h4"}
          className="text-powder-light"
        >
          Bantu Dukung Kegiatan Kami
        </Header>
        {isOpen && (
          <Divider
            borderColor="#88BFE8"
            borderWidth={width >= 1280 ? 4 : width >= 768 ? 3 : 2}
            background="#88BFE8"
            width={width / (width >= 1280 ? 4 : width >= 768 ? 3 : 2)}
          />
        )}
        {!isOpen && (
          <ChevronDownIcon
            className="w-14 text-cerulean animate-bounce cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col tablet:flex-row gap-[34px] desktop:gap-12  desktop:min-h-[368px]">
          {DONASI_DESCRIPTION.map(({ title, description }) => (
            <Card
              preset="light"
              key={uuid()}
              className="p-4 desktop:p-10 rounded-[7px] tablet:rounded-[11px] desktop:rounded-[20px]"
            >
              <div className="space-y-[15px]">
                <Header
                  preset={width >= 1280 ? "h4" : "h5"}
                  className="text-denim-dark text-left"
                >
                  {title}
                </Header>
                <Body
                  preset={width >= 1280 ? "p2" : "p3"}
                  className="text-denim-dark font-light text-left"
                >
                  {description}
                </Body>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
