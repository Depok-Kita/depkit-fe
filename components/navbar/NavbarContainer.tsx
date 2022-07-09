import { Flex, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const NavbarContainer = ({ children, className, ...props }: any) => {
  // MERUBAH WARNA SHADOW
  const theme = extendTheme({
    shadows: {
      bluelight: "0px 5px 10px rgba(218, 235, 243, 0.7)",
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={8}
          py={2}
          bg={["#F2FAFE", "#F2FAFE", "#F2FAFE", "#F2FAFE"]}
          color={["black", "black", "primary.700", "primary.700"]}
          position="fixed"
          boxShadow="bluelight"
          className={`px-4 tablet:px-12 desktop:px-20 z-50 ${className}`}
          {...props}
        >
          {children}
        </Flex>
      </ChakraProvider>
    </>
  );
};
