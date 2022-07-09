import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Header } from "@components/typography";
import DepkitLogo from "@images/depkit-logo.svg";
import Link from "next/link";

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <HStack className="gap-[14px] tablet:gap-[34px] desktop:gap-[57px]">
        <DepkitLogo className="w-12 h-12" />
        <Link href={"/"} passHref>
          <div>
            <Header
              preset="h4"
              className="hover:text-cerulean cursor-pointer"
              decorative
            >
              Depok Kita
            </Header>
          </div>
        </Link>
      </HStack>
    </Box>
  );
}
