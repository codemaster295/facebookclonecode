module.exports = {
  important: true,
    // mode: 'jit'   ,  
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
        'btn-blue':'#1877f2',
        'btn-green':'#42b72a',
        'bg-theme':'#e9ebee'
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar'),
  ],
}