/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Cairo']
    },
    extend: {
      colors: {
        primary: '#5165FD'
      }
    }
  },
  plugins: []
}
