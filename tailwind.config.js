/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '660px',
      md: '880px',
      ml: '1366px',
      lg: '1920px',
      xl: '1920px',
    },
    extend: {},
  },
  plugins: [],
}