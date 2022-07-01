import { Flex, Divider } from "@chakra-ui/react";

export const NavbarContainer = ({ children, ...props }: any) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        py={6}
        px={24}
        // bg={["red", "green", "blue", "transparent"]}
        bg={["white", "white", "white", "white"]}
        color={["black", "black", "primary.700", "primary.700"]}
        position="fixed"
        {...props}
      >
        {children}
      </Flex>
    </>
  );
};
