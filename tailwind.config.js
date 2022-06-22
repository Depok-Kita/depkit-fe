module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: { darkdenim: "#0C182F" },
      secondary: {
        cerulean: "#88BFE8",
        powder: "#DAEBF3",
        lightpowder: "#F2FAFE",
      },
      states: {
        danger: "#DB4333",
        success: "#81D38A",
        warning: "#EEC800",
      },
      neutral: {
        black: "#000000",
        darkgrey: "#636363",
        grey: "#909090",
        lightgrey: "#D6D6D6",
        softgrey: "#E5E5E5",
        totalwhite: "#FFFFFF",
      },
      accents: {
        lightdenim: "#213456",
        palepink: "#E0B9B5",
        tortoise: "#9AC79F",
        cream: "#D3BFB1",
        mustard: "#F7D76A",
      },
    },
    extend: {},
  },
  plugins: [],
};
