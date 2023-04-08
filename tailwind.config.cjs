/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   Poppins: ["Poppins"],
      // },
      // screens: {
      //   xs: "270px",
      // },
      // backgroundImage: {
      //   hotAir: "url('./src/assets/hotAir.jpg')",
      //   heroBg: "url('/src/assets/heroBg.jpg')",
      // },

      fontFamily: {
        Mono: ["Inconsolata", "monospace"],
        Serif: ["Lora", "serif"],
        Sanserif: ["Inter", "sans-serif"],
      },

      colors: {
        "black-1": "#050505",
        "black-2": "#1F1F1F",
        "black-3": "#2D2D2D",
        "black-4": "#3A3A3A",

        "white-1": "#757575",
        "white-2": "#E9E9E9",
        "white-3": "#F4F4F4",
        "white-4": "#FFFFFF",

        violet: "#A445ED",
        peach: "#FF5252"
      }
    },
  },
  plugins: [],
}
