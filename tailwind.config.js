/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*/.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
