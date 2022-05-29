const colors = {
  primary: '#0bb58d',
  white: '#fefefe',
  black: '#16171B',
  success: '#35cc00',
  warning: '#FFCA28',
  danger: '#F5726C',
  silver: '#ccc',
}

const contrasts = {
  primary: colors.white,
  secondary: colors.white,
  black: colors.white,
  white: colors.black,
  success: colors.white,
  warning: colors.white,
  danger: colors.white,
  silver: colors.black,
}

const breakPoints = {
  mobile: `@media screen and (max-width:  768px)`,
  desktop: `@media screen and (min-width: 769px)`,
}

const theme = {
  contrasts,
  breakPoints,
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
}

export const lightTheme = {
  ...theme,
  colors: {
    ...colors,
    black: '#282828',
  },
  contrasts: {
    ...contrasts,
  },
}

export const darkTheme = {
  ...theme,
  colors: {
    ...colors,
    black: colors.white,
    white: colors.black,
  },
  contrasts: {
    ...contrasts,
    white: colors.white,
  },
}

export default lightTheme
