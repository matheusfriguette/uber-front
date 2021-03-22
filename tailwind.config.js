const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1024px",
        xl: "1280px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: "#333",
    },
    extend: {
      fontFamily: {
        title: [
          "UberMove",
          "ui-sans-serif",
          "system-ui",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "UberMoveText",
          "UberMove",
          "ui-sans-serif",
          "system-ui",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
