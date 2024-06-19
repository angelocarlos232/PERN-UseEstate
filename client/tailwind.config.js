/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-red': '#f54748',
        'default-hover-red': '#c23839',
        'fafafa' : "#fafafa",
        'default-brown' : "#6d6051",
      },
    },
  },
  plugins: [],
}
