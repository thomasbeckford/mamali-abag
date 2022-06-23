import { customPalette } from '../../base/palette'

const Tab = {
  MuiTab: {
    styleOverrides: {
      root: {
        background: customPalette.ash20,
        color: customPalette.ash,
        '&.Mui-selected': {
          background: customPalette.blackAsh,
          color: customPalette.white,
        },
      },
    },
  },
}

export default Tab
