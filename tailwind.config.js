const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        sintopurple: {
          50: "#dbd7e4",
          100: "#a69cbc",
          200: "#8274a1",
          300: "#706094",
          400: "#5e4c86",
          500: "#4C3879",
          600: "#3d2d61",
          700: "#2e2249",
          800: "#1e1630",
          900: "#171124",
        },
        sintogreen: {
          50: "#e7ffeb",
          100: "#b2f7c2",
          200: "#89e3a7",
          300: "#6ac48f",
          400: "#559c79",
          500: "#2f855a",
          600: "#19814d",
          700: "#087a41",
          800: "#006834",
          900: "#004e27",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
