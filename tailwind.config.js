module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
        'btn-blue':'#1877f2',
        'btn-green':'#42b72a'
      }
    },
  },
  variants: {},
  plugins: [],
}