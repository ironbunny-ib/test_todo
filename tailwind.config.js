module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '600px',
      'md': '900px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
