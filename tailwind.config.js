/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode:true,
  content: [],
  theme: {
    fontFamily: {
      sans:['Inter','sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

