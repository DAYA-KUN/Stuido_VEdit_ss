/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'header_color': '#7E7DFB',
        'main_div': '#A8F2E6',
        'search': '#BCFFFA',
        'custom-purple': '#9531EC',
        'custom-purple1':'#A357F5',
        'button-nav': '#F8EFFF',
        'home-div': '#F5F5FA',
        'hover':'#F8EFFF',
      },
      fontSize: {
        'xs':'0.625rem',
      }
    },
  },
  plugins: [],
};
