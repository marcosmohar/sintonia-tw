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
          50: "#d5e7de",
          100: "#c1dace",
          200: "#97c2ad",
          300: "#6daa8c",
          400: "#599d7b",
          500: "#2f855a",
          600: "#266a48",
          700: "#1c5036",
          800: "#133524",
          900: "#0e281b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
