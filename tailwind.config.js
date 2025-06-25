/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color (Warm but professional)
        primary: {
          50: '#fef6ee',
          100: '#fdead7',
          200: '#fbd1af',
          300: '#f9b27d',
          400: '#f68a49', // Main primary color
          500: '#f36922',
          600: '#e44f18',
          700: '#bd3a16',
          800: '#963019',
          900: '#792a18',
        },
        // Secondary Color (Sophisticated neutral)
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666', // Main secondary color
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
        },
        // Accent Color (Fresh and energetic)
        accent: {
          50: '#f0fdf6',
          100: '#dcfce9',
          200: '#bbf5d5',
          300: '#86eeb9',
          400: '#49dd95', // Main accent color
          500: '#20c574',
          600: '#15a35e',
          700: '#14804c',
          800: '#16653f',
          900: '#135336',
        },
        // Supporting Color (Warm and inviting)
        support: {
          50: '#fef2f3',
          100: '#fee2e4',
          200: '#fecacf',
          300: '#fca5ad',
          400: '#f87182', // Main support color
          500: '#ef4459',
          600: '#dc2740',
          700: '#ba1a32',
          800: '#9b1930',
          900: '#851a2f',
        }
      }
    },
  },
  plugins: [],
}