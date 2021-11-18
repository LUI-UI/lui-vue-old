const color = require('./colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  // mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: color.gray[800],
        light: color.gray[100],
        warning: color.yellow,
        danger: color.red,
        primary: color.blue,
        success: color.green,
        info: color.cyan,
        secondary: color.gray,
      },
      boxShadow: {
        DEFAULT: '0px 0px 16px rgba(0,0,0,0.1)',
        sm: '0px 4px 6px rgba(0,0,0,0.08)',
        md: '0px 6px 12px rgba(0,0,0,0.08)',
        lg: '0px 12px 24px rgba(0,0,0,0.08)',
        xlg: '0px 20px 32px rgba(0,0,0,0.12)', // xlg olmamalı XL olmalı.
      },
      fontSize: {
        "2xs": '.625rem', // 2xs olmalı
        base: '1rem', // Bu zaten yok mu ?
      },
      borderRadius: {
        "2xs": '0.125rem',
        xs: '.25rem',
        sm: '.375rem',
        md: '.5rem',
        lg: '.625rem',
        xl: '.75rem', // xl olmalı
        "2xlg": '1rem', // olmamalı 2xl olmalı.
      },
      lineHeight: {
        4.5: '1.125rem', // button da kullanildi deigecek mi ?
      },
    },
    colors: color,
    fontFamily: {
      worksans: ['"Work Sans"', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      textColor: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      // outlineColor: ['hover','focus'],
      ringColor: ['disabled'],
      ringWidth: ['disabled']
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const outline = {
        '.outline': {
          outlineColor: theme('colors'),
          outlineStyle: 'solid',
          outlineWidth: '1px',
        },
      }
      addUtilities(outline)
    }),
  ],
}
