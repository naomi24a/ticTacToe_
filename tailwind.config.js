/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// const defaultTheme = require('tailwindcss/defaultTheme')
// module.exports = {
//   content: [
//     "./src/**/*.{html,scss,ts}",
//   ],
//   important: true,
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
//       }
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// }