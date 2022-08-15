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
        <link rel="icon" href="/assets/images/depkit-logo-tabs.svg" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Depok Kita 2022</title>
        <meta name="title" content="Depok Kita 2022" />
        <meta
          name="description"
          content="Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi Pendidikan Kreatif dan Kesehatan Lingkungan serta dimeriahkan dengan pesta rakyat dalam rangkaian Social Event."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Depok Kita 2022" />
        <meta
          property="og:description"
          content="Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi Pendidikan Kreatif dan Kesehatan Lingkungan serta dimeriahkan dengan pesta rakyat dalam rangkaian Social Event."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Depok Kita 2022" />
        <meta
          property="twitter:description"
          content="Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi Pendidikan Kreatif dan Kesehatan Lingkungan serta dimeriahkan dengan pesta rakyat dalam rangkaian Social Event."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
