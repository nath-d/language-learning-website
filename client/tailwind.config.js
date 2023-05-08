/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        mont: "'Montserrat', sans-serif",
        nunito: "'Nunito', sans-serif"
      }
    },
  },
  plugins: [],
}

