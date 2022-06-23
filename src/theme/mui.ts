import { createTheme, ThemeOptions } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { customPalette } from './base/palette'
import { customTypography as typography } from './base/typography'
import { Button, Input, Tab } from './components'

const theme = createTheme({
  ...typography,
  customColors: {
    ...customPalette,
  },
  components: {
    ...Button,
    ...Input,
    ...Tab,
  },
} as ThemeOptions)

export default theme

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    [key: string]: true
  }
  interface ExtendedTypographyOptions extends TypographyOptions {
    hero: React.CSSProperties
    body1bold: React.CSSProperties
    body2bold: React.CSSProperties
    buttonLarge: React.CSSProperties
    buttonMedium: React.CSSProperties
    buttonSmall: React.CSSProperties
    inputLabel: React.CSSProperties
    helperText: React.CSSProperties
    inputText: React.CSSProperties
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    [key: string]: true
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      [key: string]: string
    }
  }
  interface ThemeOptions {
    customColors?: {
      [key: string]: string
    }
  }
}
