const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        buttonHover: "0 4px 30px 3px hsla(283, 53%, 64%, 0.5)",
      },
      backgroundImage: {
        primary: "linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)",
        mockupChartBar:
          "linear-gradient(154.63deg, #FF9898 3.69%, #8054FF 67.86%)",
      },
      colors: {
        gray: {
          100: "#9E9E9E",
          200: "#3D3D49",
          300: "#3B3B42",
          400: "#3A3A47",
          500: "#313139",
          600: "#231F20",
          700: "#222228",
          800: "#18181C",
          900: "#131415",
          DEFAULT: "#9E9E9E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
