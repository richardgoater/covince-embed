// const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const covinceConfig = require('covince/tailwind.config')

module.exports = {
  ...covinceConfig,
  purge: {
    content: [
      './src/**/*.jsx',
      './node_modules/covince/src/**/*.jsx'
    ]
  },
  theme: {
    ...covinceConfig.theme,
    fontFamily: {
      sans: ['Helvetica Neue', 'arial', 'sans-serif'],
      heading: ['Helvetica Neue', 'arial', 'sans-serif'],
      display: ['Wellcome Bold', 'Helvetica Neue', 'arial', 'sans-serif']
    },
    extend: {
      ...covinceConfig.theme.extend,
      colors: {
        gray: colors.blueGray,
        primary: colors.purple[500],
        heading: colors.blueGray[700],
        subheading: colors.blueGray[600],
        dark: {
          primary: colors.indigo[300],
          heading: colors.gray[200],
          subheading: colors.gray[300]
        },
      },
      spacing: {
        ...covinceConfig.theme.extend.spacing,
      },
      width: {
        content: 'fit-content'
      },
      // maxWidth: {
      //   'measure-1': '60ch',
      //   'measure-1.5': '65ch',
      //   'measure-2': '70ch'
      // }
    }
  },
  variants: {
    extend: {
      ringWidth: ['focus-visible']
    }
  },
  plugins: [
    ...covinceConfig.plugins
  ]
}
