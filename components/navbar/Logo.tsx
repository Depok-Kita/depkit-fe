import React from "react";
import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Header, Body } from "@components/typography";

export default function Logo(props: any) {
  // CATATAN: NANTI GANTI KE SVG
  const myLoader = () => {
    return `https://media-exp2.licdn.com/dms/image/C4D0BAQHBj--3EhSy1g/company-logo_200_200/0/1656400381779?e=1665014400&v=beta&t=vuaE5VRzf34V9ncV9XddR6N1zB8_L1bjpdkR2C7XfKM`;
  };

  return (
    <Box {...props}>
      <HStack spacing={8}>
        <Image
          loader={myLoader}
          src="https://media-exp2.licdn.com/dms/image/C4D0BAQHBj--3EhSy1g/company-logo_200_200/0/1656400381779?e=1665014400&v=beta&t=vuaE5VRzf34V9ncV9XddR6N1zB8_L1bjpdkR2C7XfKM"
          alt="Logo Depok Kita"
          width={50}
          height={50}
        />

        <Header preset="h5">
          <Text display="block">Depok Kita</Text>
        </Header>
      </HStack>
    </Box>
  );
}
