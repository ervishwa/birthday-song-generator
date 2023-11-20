/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-landing': "url('./ui-images/bg-landing.jpg')"
      },
      colors:{
        'pale-yellow':"rgb(223,183,112)",
    },
  },
  plugins: [],
}
}
