/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        text: '#00ff9c',
        accent: '#39ff14',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
