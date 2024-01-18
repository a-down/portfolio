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

        // Portfolio Color Palette
        'brand-50': '#F1F6FD',
        'brand-100': '#DFEAFA',
        'brand-200': '#C6DAF7',
        'brand-300': '#9FC3F1',
        'brand-400': '#699EE8',
        'brand-500': '#4F82E2',
        'brand-600': '#3B66D5',
        'brand-700': '#3153C4',
        'brand-800': '#2E459F',
        'brand-900': '#2A3D7E',
        'brand-950': '#1E284D'
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