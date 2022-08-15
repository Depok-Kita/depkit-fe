import "../styles/styles.css";
import theme from "@styles/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar, Footer } from "@components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Head>
        <title>Depok Kita</title>
        <link rel="icon" href="/assets/images/depkit-logo-tabs.svg" />
        <meta property="og:image" content="/assets/images/meta.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
