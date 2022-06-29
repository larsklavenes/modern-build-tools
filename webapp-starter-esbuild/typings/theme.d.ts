import 'styled-components'
import { CSSProperties } from 'react'
import { Theme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    contrast: string
  }

  interface ToastPalette {
    info: string
    error: string
    success: string
  }

  interface TypeBackground {
    grey: string
    dark: string
    light: string
  }

  interface ExtraPaletteOptions {
    toast: ToastPalette
    tooltip: SimplePaletteColorOptions
    disabled: SimplePaletteColorOptions
    background: TypeBackground
  }

  interface SimplePaletteColorOptions {
    xlight?: string
    secondary?: string
  }

  interface Palette extends ExtraPaletteOptions {}
  interface PaletteOptions extends ExtraPaletteOptions {}
}

declare module '@mui/material/styles/createTypography' {
  interface FontStyle {
    fontFamilySecondary: CSSProperties['fontFamily']
  }
}

// Extend the module declarations with our MuiTheme to give us type information inside styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
