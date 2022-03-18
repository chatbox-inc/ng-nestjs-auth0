module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
