/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         trade_tech: {
            blue_ncs: '#008BC6',
            bright_gray: '#E6F4F1',
            cool_black: '#002A5A',
            marigold: '#E79C25',
         },
      },
      extend: {
         gridTemplateColumns: {
            loginForm: '75% 25%',
         },
      },
   },
   plugins: [],
};
