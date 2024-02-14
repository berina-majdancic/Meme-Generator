/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    backgroundImage:{
      'myGradient':'linear-gradient(to right top, #feddff, #fdd1fb, #fdc4f6, #fdb7f0, #feaae9, #f7a0e8, #f096e7, #e78ce7, #d186ee, #b582f4, #9280fa, #627eff)'},
    extend: {
      
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
  
}
