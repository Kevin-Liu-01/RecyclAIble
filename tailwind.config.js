module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        plantGreen: "#008568",
        plantGreenDark: "#006751",
        plantGreenDarker: "#004b3a",
        plantGreenMidDark: "005c48",
        plantGreenLight: "#cdfff4",
        plantGreenLighter: "#00bc93",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
