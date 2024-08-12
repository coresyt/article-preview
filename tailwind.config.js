/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/**/*.jsx'
  ],
  theme: {
    colors: {
      primary: {
        'very-dark-grayish-blue': 'rgb(33, 43, 56)',
        'desaturated-dark-blue': 'rgb(54, 65, 85)',
        'grayish-blue': 'rgb(152, 163, 182)',
        'Light Grayish Blue': 'rgb(240, 242, 248)'
      }
    },
    extend: {
    },
  },
  plugins: [],
}

