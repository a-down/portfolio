/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Outfit, sans-serif',
      'serif': 'Zilla Slab, serif'
    },
    extend: {
      colors: {
        'accent': '#95ADCF',
        'navy': '#1B2032',
        'navy-faded': 'rgba(27, 32, 50, 0.20)'     
      },
      dropShadow: {
        'header': '0 6px 6px #95ADCF'
      },
      screens: {
        'lg': '1040px'
      }
  },
  plugins: [],
}
}