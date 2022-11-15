/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        logo: '#FF0000',
        search: '#f8f8f8',
        lightGray: '#e2e2e2',
        tag: '#3ea6ff',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
      },
      fontFamily: {
        logoFont: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
