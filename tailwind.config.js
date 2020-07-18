const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus'],
    padding: ['responsive', 'first'],
    visibility: ['responsive', 'hover', 'group-hover', 'focus'],
    borderWidth: ['responsive', 'first'],
  },
  plugins: [require('@tailwindcss/ui')],
};
