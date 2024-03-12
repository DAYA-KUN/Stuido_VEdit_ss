/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'header_color': '#7E7DFB',
        'main_div': '#A8F2E6'
      }
    },
  },
  plugins: [],
};
