import flowbite from 'flowbite-react/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    extend: {
      animation: {
        model: 'showModel  .8s ',
      },
      keyframes: {
        showModel: {
          '0%': {
            transform: 'translateY(-200px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },
      screens: {
        '2xl': '1280px',
      },
      colors: {
        primary: {
          50: '#e7f7e7',
          100: '#9dde9d',
          200: '#85d685',
          300: '#54c654',
          400: '#3bbd3b',
          500: '#0aad0a',
          600: '#099c09',
          700: '#088a08',
          800: '#077907',
          900: '#055705',
          950: '#044504',
        },
      },
      fontFamily: {
        cairo: 'Cairo Variable',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
