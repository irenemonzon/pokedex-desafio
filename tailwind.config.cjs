/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {}
  },
  plugins: []
}
