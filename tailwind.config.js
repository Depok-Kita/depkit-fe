module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      danger: {
        light: "#DB4333",
        dark: "#DB4333",
      },
      warning: {
        light: "#EEC800",
        dark: "#EEC800",
      },
      success: {
        light: "#81D38A",
        dark: "#81D38A",
      },
      denim: {
        light: "#213456",
        dark: "#0C182F",
      },
      cerulean: "#88BFE8",
      powder: {
        DEFAULT: "#DAEBF3",
        light: "#F2FAFE",
      },
      states: {
        danger: "#DB4333",
        success: "#81D38A",
        warning: "#EEC800",
      },
      black: "#000000",
      grey: {
        DEFAULT: "#909090",
        dark: "#636363",
        light: "#D6D6D6",
        soft: "#E5E5E5",
      },
      totalwhite: "#FFFFFF",
      palepink: "#E0B9B5",
      tortoise: "#9AC79F",
      cream: "#D3BFB1",
      mustard: "#F7D76A",
    },
    fontFamily: {
      "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      bold: ["Plus Jakarta Sans Bold", "sans-serif"],
      semibold: ["Plus Jakarta Sans SemiBold", "sans-serif"],
    },
    screens: {
      mobile: "360px",
      tablet: "768px",
      desktop: "1280px",
      wide: "1537px",
    },
    extend: {
      animation: {
        "slide-out-right":
          "slide-out-right 2s cubic-bezier(0.550, 0.085, 0.680, 0.530)  infinite both",
        "slide-out-left":
          "slide-out-left 2s cubic-bezier(0.550, 0.085, 0.680, 0.530)  infinite both",
      },
      keyframes: {
        "slide-out-right": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          to: {
            transform: "translateX(300%)",
            opacity: "0",
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          to: {
            transform: "translateX(-300%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
