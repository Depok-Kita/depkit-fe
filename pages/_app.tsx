import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Navbar } from "@components";
import theme from "@styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/styles.css";

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
        <meta property="og:url" content="https://www.depokkita.com" />
        <meta property="og:title" content="Depok Kita 2022" />
        <meta
          property="og:description"
          content="Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi Pendidikan Kreatif dan Kesehatan Lingkungan serta dimeriahkan dengan pesta rakyat dalam rangkaian Social Event."
        />
        <meta property="og:image" content="/assets/images/meta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.depokkita.com" />
        <meta property="twitter:title" content="Depok Kita 2022" />
        <meta
          property="twitter:description"
          content="Kegiatan pengabdian masyarakat di bawah naungan Departemen Sosial Masyarakat BEM UI 2022 dengan kegiatan intervensi Pendidikan Kreatif dan Kesehatan Lingkungan serta dimeriahkan dengan pesta rakyat dalam rangkaian Social Event."
        />
        <meta property="twitter:image" content="/assets/images/meta.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
