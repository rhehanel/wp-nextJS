/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Josefin Sans", "sans-serif"],
        body: ["Noto Sans KR", "sans-serif"],


      },
      screens: {
        'medm': { 'raw': '(max-width: 820px)' },
      }
    },
  },
  plugins: [],
};
