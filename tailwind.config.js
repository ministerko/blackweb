/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        gray: '#1E1E1E',
        electricBlue: '#00D8FF',
        neonGreen: '#39FF14',
      },
    },
  },
  plugins: [],
};
