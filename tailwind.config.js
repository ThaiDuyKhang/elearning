module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'fit': 'fit-content'
      }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
