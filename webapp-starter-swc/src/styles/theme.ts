import { createTheme } from '@mui/material/styles'

import {
  fontFamily as proximaNova,
  proximaNovaLight,
  proximaNovaRegular,
  proximaNovaRegularItalic,
  proximaNovaSemibold,
  proximaNovaBold,
} from 'src/styles/fonts'

const fontFamily = `${proximaNova}, Roboto, Helvetica, Arial, sans-serif`

const fontWeightLight = 300
const fontWeightRegular = 400
const fontWeightMedium = 500
const fontWeightBold = 700

const spacingUnit = 8
export const spacing = (multiplier: number): number => spacingUnit * multiplier

export const palette = {
  primary: {
    main: '#002f6b',
    light: '#3867a3',
    xlight: '#6897d3',
    dark: '#000743',
    contrastText: '#fff',
  },
  secondary: {
    main: '#DBE7FF',
    light: '#6d9eff',
    dark: '#c9dbff',
    contrastText: '#4B87FF',
  },
  background: {
    light: '#F5F7FA',
    grey: '#E4E4E4',
    default: '#fff',
    dark: '#302e34',
    paper: '#fff',
  },
  disabled: {
    main: '#949494',
    light: '#f4f4f4',
  },
  success: {
    main: '#4CAF50',
    light: '#CFFFD2',
    xlight: '#F5FDF7',
  },
  warning: {
    main: '#FF9800',
    xlight: '#fffaea',
  },
  error: {
    main: '#F44336',
    light: '#FBE3EE',
    xlight: '#fcedf4',
  },
  text: {
    primary: '#000000',
    secondary: '#949494',
    contrast: '#FFFFFF',
  },
  divider: '#ECECEC',
  tooltip: {
    main: '#0b1f31',
    secondary: '#FFFFFF',
  },
  toast: {
    info: '#4B87FF',
    error: '#D2003C',
    success: '#84D584',
  },
  type: 'light',
}

const theme = createTheme({
  palette,
  spacing,
  typography: {
    fontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
  },
})

// We can only use typography function such as pxToRem after the createMuiTheme
theme.typography = {
  ...theme.typography,
  fontFamily,
  fontWeightBold,
  fontWeightLight,
  fontWeightMedium,
  fontWeightRegular,
  fontFamilySecondary: fontFamily,
  h1: {
    ...theme.typography.h1,
    fontFamily: fontFamily,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(40),
    lineHeight: theme.typography.pxToRem(54),
  },
  h2: {
    ...theme.typography.h2,
    fontFamily: fontFamily,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(32),
    lineHeight: theme.typography.pxToRem(43),
  },
  h3: {
    ...theme.typography.h3,
    fontFamily: fontFamily,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(24),
    lineHeight: theme.typography.pxToRem(32),
  },
  h4: {
    ...theme.typography.h4,
    fontFamily: fontFamily,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    lineHeight: theme.typography.pxToRem(24),
  },
  h5: {
    ...theme.typography.h5,
    fontFamily: fontFamily,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  h6: {
    ...theme.typography.h6,
    fontFamily: fontFamily,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
  },
  subtitle1: {
    ...theme.typography.subtitle1,
  },
  subtitle2: {
    ...theme.typography.subtitle2,
  },
  body1: {
    ...theme.typography.body1,
    fontFamily: fontFamily,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  body2: {
    ...theme.typography.body2,
    fontFamily: fontFamily,
  },
  button: {
    ...theme.typography.button,
    fontFamily: fontFamily,
    fontWeight: fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
  },
  caption: {
    ...theme.typography.caption,
    fontFamily: fontFamily,
    fontWeight: fontWeightRegular,
    fontSize: theme.typography.pxToRem(11),
    lineHeight: theme.typography.pxToRem(16),
  },
  overline: {
    ...theme.typography.overline,
  },
}

// Overrides are assigned here so we can use theme.breakpoints
// Defaults can be deleted. These are used to test that Storybook Mui theming works
theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    ...theme.components?.MuiCssBaseline,
    styleOverrides:
      proximaNovaLight +
      proximaNovaRegular +
      proximaNovaRegularItalic +
      proximaNovaSemibold +
      proximaNovaBold,
  },
  MuiButton: {
    ...theme.components?.MuiButton,
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
    },
  },
}

export default theme
