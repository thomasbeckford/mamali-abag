import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { SwapContext } from '../../context/swap'
import AsideText from '../AsideText'

export default function ConnectWallet() {
  const { swapSelections } = useContext(SwapContext)
  const { isConnected, handleConnect } = React.useContext(AuthContext)

  return (
    <Box
      sx={{
        p: 3,
        background: ({ customColors }) => customColors.ash10,
        textAlign: 'center',
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: '96px',
          height: '96px',
          background: ({ customColors }) => customColors.ash40,
          borderRadius: '50%',
          margin: '0 auto',
          marginTop: '130px',
        }}
      />
      <Typography variant="subtitle1" sx={{ marginTop: '32px', color: '#000' }}>
        {isConnected
          ? swapSelections
            ? 'Transaction Details'
            : 'Hint'
          : 'Connect your wallet'}
      </Typography>

      <AsideText />

      <Typography
        variant="buttonSmall"
        onClick={handleConnect}
        sx={{
          color: ({ customColors }) => customColors.blue,
          cursor: 'pointer',
          marginTop: '32px',
          display: 'block',
        }}
      >
        {!isConnected && 'Connect wallet'}
      </Typography>
    </Box>
  )
}
