/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'tourism1': "url('https://i.postimg.cc/ydkVkz3R/tourism-1.jpg')"
      },
      fontFamily:{
        DancingScript:['Dancing Script','cursive'],
        Tangerine:['Tangerine','cursive'],
        Robot: ['Roboto', 'sans-serif']
      }
    },
  },
  
  plugins: [require("daisyui")],
  daisyui: {

    themes: [ "light", "dark",],
  },
}

