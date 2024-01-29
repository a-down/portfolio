/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: "Outfit, sans-serif",
      serif: "Zilla Slab, serif",
      jost: "Jost, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // orriginal portfolio color pallette
        accent: "#95ADCF",
        navy: "#1B2032",
        "navy-faded": "rgba(27, 32, 50, 0.20)",

        // Quick Measure Color Palette
        "green-1": "#E7F8E6",
        "green-2": "#C9E9C8",
        "green-3": "#AED6A9",
        "green-4": "#8CC185",
        "green-5": "#6DAB64",
        "green-6": "#558E4B",
        "green-7": "#477F3C",
        "green-8": "#3A7032",
        "green-9": "#2B561F",
        "green-10": "#1D3F13",

        // Portfolio Color Palette
        "brand-50": "#F1F6FD",
        "brand-100": "#DFEAFA",
        "brand-200": "#C6DAF7",
        "brand-300": "#9FC3F1",
        "brand-400": "#699EE8",
        "brand-500": "#4F82E2",
        "brand-600": "#3B66D5",
        "brand-700": "#3153C4",
        "brand-800": "#2E459F",
        "brand-900": "#2A3D7E",
        "brand-950": "#1E284D",
      },
      screens: {
        lg: "1040px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
