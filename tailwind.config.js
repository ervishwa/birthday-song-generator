/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-landing": "url('./ui-images/bg-landing.jpg')",
      },
      colors: {
        "pale-yellow": "rgb(223,183,112)",
        "blue-10": "rgb(46,4,109)",
      },
      fontFamily: {
        DairyMilkFont: "DairyMilkFont",
        GibsonBold: "GibsonBold",
        gibsonitalic: "gibsonitalic",
        gibsonlight: "gibsonlight",
        gibsonregular: "gibsonregular",
        gibsonsemibold: "gibsonsemibold",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
