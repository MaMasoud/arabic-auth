/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bgColor: '#E8F2FF',
      nav: '#347DDB',
      border: '#CDD6E0',
      white: '#FFFFFF',
      primary: '#08203D',
      error: '#F03B3B'
    }
  },
  plugins: [],
}