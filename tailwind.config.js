/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Green':'#245D51',
        'peach900':'#CB8461',
        'LightPeach':'#F2E7DB',
        'silver':'#808080',
        'offWhite':'#F8F8F8',
        'bcolor':"#2C2C2C",
        'wcolor':"#FAFAFA"


      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

