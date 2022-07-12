import { Divider } from "@chakra-ui/react";
import { Header, Card, Body } from "@components";
import { useWindowSize } from "@hooks";
import React from "react";
import { DONASI_DESCRIPTION } from "@constants";
import { v4 as uuid } from "uuid";

export const DonasiDescription = ({ className }: { className: string }) => {
  const { width } = useWindowSize();
  return (
    <div
      className={`space-y-[50px] px-[350px] py-28 text-center bg-denim-light ${className}`}
    >
      <div className="flex justify-center items-center flex-col gap-[25px]">
        <Header preset="h2" className="text-powder-light">
          Bantu Dukung Kegiatan Kami
        </Header>
        <Divider
          borderColor="#88BFE8"
          borderWidth={4}
          background="#88BFE8"
          width={width / 4}
        />
      </div>
      <div className="flex gap-12">
        {DONASI_DESCRIPTION.map(({ title, description }) => (
          <Card preset="light" key={uuid()}>
            <div className="space-y-[15px]">
              <Header preset="h4" className="text-denim-dark text-left">
                {title}
              </Header>
              <Body
                preset="p2"
                className="text-denim-dark font-light text-left"
              >
                {description}
              </Body>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
