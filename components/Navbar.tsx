import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import { Header } from "./typography";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="2rem" align="center">
        {/* Desktop */}
        <Flex
          display={["none", "none", "flex", "flex", "flex", "flex", "flex"]}
        >
          <NextLink href="/" passHref>
            <Image
              src="/images/depkitLogo.png"
              alt="Depkit Logo"
              width={500}
              height={500}
            />
          </NextLink>

          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="150%">
              <Header preset="h4">Depok Kita</Header>
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="200%">
              <Header preset="h5">Tentang Kami</Header>
            </Button>
          </NextLink>

          <NextLink href="/fesrak" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="200%">
              <Header preset="h5">Festival Rakyat</Header>
            </Button>
          </NextLink>

          <NextLink href="/donation" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              <Header preset="h5">Donasi</Header>
            </Button>
          </NextLink>

          <NextLink href="/gallery" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              <Header preset="h5">Galeri</Header>
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              <Header preset="h5">Kontak</Header>
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          // icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            // icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Depok Kita
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Tentang Kami
            </Button>
          </NextLink>

          <NextLink href="/fesrak" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Festival Rakyat
            </Button>
          </NextLink>

          <NextLink href="/donation" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Donasi
            </Button>
          </NextLink>

          <NextLink href="/gallery" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Galeri
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Kontak
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
