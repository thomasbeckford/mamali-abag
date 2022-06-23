import { customPalette } from '../../base/palette'

const Button = {
  MuiButton: {
    styleOverrides: {
      root: {
        background: customPalette.blue,
        borderRadius: '0px',
        '&:hover': {
          backgroundColor: customPalette.blackAsh,
        },
      },
    },
    variants: [
      {
        props: { variant: 'smallButton' },
        style: {
          padding: '9px 16px',
        },
      },
      {
        props: { variant: 'mediumButton' },
        style: {
          padding: '12px 24px',
        },
      },
      {
        props: { variant: 'largeButton' },
        style: {
          padding: '18px 32px',
        },
      },
    ],
  },
}

export default Button
