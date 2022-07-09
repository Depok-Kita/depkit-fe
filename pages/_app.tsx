import "../styles/styles.css";
import theme from "@styles/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar, Footer } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
