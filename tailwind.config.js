/** @type {import('tailwindcss').Config} */
//eslint-disble-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono monospace', //here we only store the font family name in the pizza variable
    },
  },
  extend: {
    fontSize: {
      huge: ['88rem', { lineHeight: '1' }], // to set am element here , we put it in the extend plug
    },
    height:{
      screen: '100dvh', //standart view port
    }
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
