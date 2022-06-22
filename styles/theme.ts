import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  themeConfig,

  colors: {
    // black: {
    //   700: "#000000",
    //   600: "#333333",
    // },
    // grey: {
    //   DEFAULT: "#666666",
    //   dark: "#4C4C4C",
    // },
    // white: "#FCFBFB",
    // blue: {
    //   700: "#003D80",
    //   600: "#004998",
    //   500: "#0154B2",
    //   400: "#0062CD",
    //   300: "#006EE7",
    // },
    // orange: {
    //   900: "",
    //   800: "",
    //   700: "#EE5E15",
    //   600: "#F58217",
    //   500: "#EE5E15", // main color
    //   400: "#FFB246",
    //   300: "#F7BC6E",
    //   200: "",
    //   100: "",
    //   50: "",
    // },
    // salmon: {
    //   DEFAULT: "#FB9865",
    //   light: "#FFC6A9",
    // },
    // danger: "#B72B1A",
    // disabled: "#CCCCCC",
    // success: "#2F6846",
    // warning: "#BE5D01",
  },
});

export default theme;
