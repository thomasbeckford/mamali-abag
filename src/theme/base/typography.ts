import { ExtendedTypographyOptions } from '@mui/material'
import { createBreakpoints } from '@mui/system'

const breakpoints = createBreakpoints({})

export const customTypography = {
  typography: {
    transform: 'sentence',
    fontWeight: 'regular',
    lineHeight: '160%',
    fontFamily: '"Konnect","Roboto", "Helvetica", "Arial", sans-serif',
    hero: {
      fontSize: 96,
      lineHeight: '120%',
      [breakpoints.up('md')]: {
        fontSize: 144,
      },
    },
    h1: {
      fontSize: 72,
      [breakpoints.up('md')]: {
        fontSize: 96,
      },
    },
    h2: {
      fontSize: 64,
      lineHeight: '120%',
      [breakpoints.up('md')]: {
        fontSize: 72,
      },
    },
    h3: {
      fontSize: 48,
      lineHeight: '120%',
      [breakpoints.up('md')]: {
        fontSize: 64,
      },
    },
    h4: {
      fontSize: 32,
      lineHeight: '140%',
      [breakpoints.up('md')]: {
        fontSize: 48,
      },
    },
    h5: {
      fontSize: 24,
      [breakpoints.up('md')]: {
        fontSize: 32,
      },
    },
    h6: {
      fontSize: 20,
      [breakpoints.up('md')]: {
        fontSize: 24,
      },
    },
    subtitle1: {
      fontSize: 18,
      [breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
    body1: {
      fontSize: 18,
      [breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
    body1bold: {
      fontSize: 18,
      fontWeight: 'medium',
      [breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
    body2: {
      fontSize: 16,
    },
    body2bold: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonLarge: {
      fontSize: 18,
      lineHeight: '140%',
      [breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
    buttonMedium: {
      fontSize: 16,
      lineHeight: '140%',
      [breakpoints.up('md')]: {
        fontSize: 18,
      },
    },
    buttonSmall: {
      fontSize: 14,
      lineHeight: '140%',
      [breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
    caption: {
      fontSize: 12,
    },
    inputLabel: {
      fontSize: 14,
    },
    helperText: {
      fontSize: 14,
    },
    inputText: {
      fontSize: 18,
      [breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
  } as ExtendedTypographyOptions,
}
