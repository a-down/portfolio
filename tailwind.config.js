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
        'navy-faded': 'rgba(27, 32, 50, 0.20)',
        'safePaws': '#DB7F67',
        'techBlog': '#3E829A',
        'gameVerseHub': '#2D6EFD',
        'weatherDashboard': '#EAC792',
        'codeQuiz': '#F08080',
        'noteTaker': '#44CAF0'      
      },
      dropShadow: {
        'header': '0 6px 6px #95ADCF'
      }
    },
  },
  plugins: [],
}

