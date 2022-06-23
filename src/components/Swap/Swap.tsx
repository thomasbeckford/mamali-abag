import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { SwapContext } from '../../context/swap'
import { SwapButton } from '../Buttons'

import ConnectWallet from '../ConnectWallet'

import FromSwap from './FromSwap'
import ToSwap from './ToSwap'

export default function Swap() {
  const { handleSwapSelections } = useContext(SwapContext)
  const { isConnected } = useContext(AuthContext)

  return (
    <Box
      sx={({ breakpoints }) => ({
        [breakpoints.up('sm')]: {
          width: '600px',
        },
      })}
    >
      <Box>
        <Typography variant="h6">Select a token to start swapping</Typography>
        <FromSwap />
        <Button
          sx={{
            background: ({ customColors }) =>
              isConnected ? customColors.blue20 : customColors.ash20,
            width: '64px',
            height: '64px',
            margin: '0 auto',
            marginTop: '32px',
            display: 'flex',
            placeContent: 'center',
          }}
          disabled={!isConnected}
          onClick={handleSwapSelections}
        >
          <Image
            src="/static/images/swapImage.svg"
            alt="Vector"
            width="14px"
            height="14px"
          />
        </Button>
        <ToSwap />
        <Box
          sx={({ breakpoints }) => ({
            marginTop: '32px',
            [breakpoints.up('sm')]: {
              display: 'none',
            },
          })}
        >
          <ConnectWallet />
        </Box>

        <Box
          sx={({ breakpoints }) => ({
            display: 'none',
            [breakpoints.up('md')]: {
              display: 'block',
            },
          })}
        >
          <SwapButton />
        </Box>
      </Box>
    </Box>
  )
}
