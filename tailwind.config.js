/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        logo: '#FF0000',
        search: '#f8f8f8',
        lightGray: '#e2e2e2',
        darkModeGray: '#ffffff14',
        tag: '#3ea6ff',
        bgBlack: '#0f0f0f',
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
