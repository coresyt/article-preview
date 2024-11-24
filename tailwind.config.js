import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/main.jsx',
    './src/components/**/*.{jsx,js}'
  ],
  theme: {
    colors: {
      primary: {
        'very-dark-grayish-blue': 'rgb(33, 43, 56)',
        'desaturated-dark-blue': 'rgb(54, 65, 85)',
        'grayish-blue': 'rgb(152, 163, 182)',
        'light-grayish-blue': 'rgb(240, 242, 248)'
      }
    },
    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans],
    },
    extend: {
    },
  },
  plugins: [],
}

