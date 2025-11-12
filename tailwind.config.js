/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#f8f7f4',
        'text': '#3c3c3c',
        'primary': '#b8a07e',
        'accent': '#d4c9b7',
      },
    },
  },
  plugins: [],
};
