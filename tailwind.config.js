/** @type {import('tailwindcss').Config} */

// reference: https://tailwindcss.com/docs/screens

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'min-60': 'repeat(4, minmax(60px, 1fr))'
      },
      screens: {
        '2xl': '1536px',
        xl: '1280px',
        lg: '992px',
        md: '768px',
        sm: '576px'
      }
    }
  },
  plugins: []
};
