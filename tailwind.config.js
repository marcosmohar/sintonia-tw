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
          50: "#C4B8DE",
          100: "#B5A7D6",
          200: "#9884C6",
          300: "#7B61B6",
          400: "#62489C",
          500: "#4C3879",
          600: "#362856",
          700: "#201833",
          800: "#0A0810",
          900: "#000000",
        },
      },
      maxWidth: {
        char: "65ch",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
