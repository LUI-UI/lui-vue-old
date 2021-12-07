const color = require('./colors')
const colors = {
  warning: {},
  danger: {},
  primary: {},
  success: {},
  info: {},
  secondary: {},
}
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'default']
const variables = ['warning', 'danger', 'primary', 'success', 'info', 'secondary']

variables.forEach((variable) => {
  levels.forEach((level) => {
    if (level !== 'default') {
      colors[variable][level] = `var(--color-${variable}-${level})`
    } else {
      colors[variable]['DEFAULT'] = `var(--color-${variable})`
    }
  })
})


module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx,vue,html}', './safelist.txt'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        ...colors, 
        black: 'var(--color-black)', 
        white: 'var(--color-white)', 
        dark: "var(--color-dark)",
        light: "var(--color-dark)", 
      },
      boxShadow: {
        DEFAULT: '0px 0px 16px rgba(0,0,0,0.1)',
        sm: '0px 4px 6px rgba(0,0,0,0.08)',
        md: '0px 6px 12px rgba(0,0,0,0.08)',
        lg: '0px 12px 24px rgba(0,0,0,0.08)',
        xl: '0px 20px 32px rgba(0,0,0,0.12)', // xlg olmamalı XL olmalı.
      },
      fontSize: {
        '2xs': '.625rem', // 2xs olmalı
        base: '1rem', // Bu zaten yok mu ?
      },
      borderRadius: {
        '2xs': '0.125rem',
        xs: '.25rem',
        sm: '.375rem',
        md: '.5rem',
        lg: '.625rem',
        xl: '.75rem', // xl olmalı
        '2xl': '1rem', // olmamalı 2xl olmalı.
      },
      lineHeight: {
        3.5: '0.875rem', // button da kullanildi deigecek mi ?
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
      textColor: ['visited', 'disabled', 'hover'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      ringColor: ['disabled'],
      ringWidth: ['disabled'],
    },
  },
  plugins: [
    require('tailwind-safelist-generator')({
      path: 'safelist.txt',
      patterns: [
        'bg-{colors}',
        'hover:bg-{colors}',
        'focus:bg-{colors}',
        'disabled:bg-{colors}',
        'text-{colors}',
        'hover:text-{colors}',
        'focus:text-{colors}',
        'visited:text-{colors}',
        'disabled:text-{colors}',
        'border-{colors}',
        'hover:border-{colors}',
        'focus:border-{colors}',
        'disabled:border-{colors}',
        'outline-{colors}',
        'hover:outline-{colors}',
        'focus:outline-{colors}',
        'disabled:outline-{colors}',
        'ring-{colors}',
        'hover:ring-{colors}',
        'focus:ring-{colors}',
        'disabled:ring-{colors}',
        'rounded-{borderRadius}'
      ],
    }),
  ],
}
