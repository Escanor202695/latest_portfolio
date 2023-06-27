/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
