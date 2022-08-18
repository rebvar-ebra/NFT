/** @type {import('tailwindcss').Config} */
const color= require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
   theme: {
    extend: {
      
    },
   
  },
  plugins: [],
}
