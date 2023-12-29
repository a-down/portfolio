/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Outfit, sans-serif',
      'serif': 'Zilla Slab, serif',
      'jost': 'Jost, sans-serif'
    },
    extend: {
      colors: {
        'accent': '#95ADCF',
        'navy': '#1B2032',
        'navy-faded': 'rgba(27, 32, 50, 0.20)',
        // Quick Measure Color Palette
        'green-1': "#E7F8E6",
        'green-2': "#C9E9C8",
        'green-3': "#AED6A9",
        'green-4': "#8CC185",
        'green-5': "#6DAB64",
        'green-6': "#558E4B",
        'green-7': "#477F3C",
        'green-8': "#3A7032",
        'green-9': "#2B561F",
        'green-10': "#1D3F13",
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