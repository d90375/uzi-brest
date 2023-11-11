/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },
    extend: {
      colors: {
        primary: "#242a2b",
        secondary: "#808080",
        accent: {
          DEFAULT: "#1CBCCF",
          secondary: "#90C6CD",
        },
        grey: "#e8f0f1",
      },
      fontFamily: {
        primary: "Montserrat",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8,70,78, 0.08)",
        custom2: "0px 2px 40px 0px rgba(8,70,78, 0.08)",
      },
    },
  },
  plugins: [],
};
