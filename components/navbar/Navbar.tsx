import { useState } from "react";
import {
  useColorMode,
  Box,
  Switch,
  Stack,
  HStack,
  Flex,
  Button,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import { Header, Body } from "../typography";
import { NavbarContainer } from "./NavbarContainer";
import Logo from "./Logo";

import { MenuToggle } from "./MenuToggle";
import { MenuLinks } from "./MenuLinks";

export const Navbar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo
        w="200px"
        color={["black", "black", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};
