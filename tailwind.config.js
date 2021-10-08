const color = require('./colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: color.gray[800],
        light: color.gray[100],
        warning: color.yellow[400],
        danger: color.red[400],
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
        xlg: '0px 20px 32px rgba(0,0,0,0.12)',
      },
      fontSize: {
        xxs: '.625rem',
        base: '1rem',
      },
      borderRadius: {
        sm: '.375rem',
        md: '.5rem',
        lg: '.625rem',
        xlg: '.75rem',
        xxlg: '1rem',
      },
    },
    colors: color,
    fontFamily: {
      worksans: ['"Work Sans"', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
