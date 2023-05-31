/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-lol': '#04809c',
        'dark-blue-lol': '#022337',
        'light-blue-lol': '#005b74',
        'yellow-lol': '#e79235',
        'purple-lol-complement': '#3e049c',
      },
    },
  },
  plugins: [],
};
