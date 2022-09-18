/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    colors: {
      'purple': '#3f2b46',
      'darkPurple': '#241C2B',
      'lowPurple': '#343444',
      'nftBackground': '#7A798A',
      'white': '#ffffff',
      'tag':'#8989a0',
      'nearBlack': '#13131e',
      'stacks': '#5142FC',
      'gold':'#fac710',
    },
    fontFamily: {      
      'urban': 'Urbanist',
    }
  },
}
