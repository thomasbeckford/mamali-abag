import { Box } from '@mui/material'
import React, { useContext } from 'react'
import AmountNumberField from '../AmountNumberField'
import { SwapContext } from '../../context/swap'
import TokenSelectField from '../TokenSelectField'

export default function ToSwap() {
  const { token2, setToken2 } = useContext(SwapContext)

  return (
    <Box sx={{ display: 'flex', gap: 2, marginTop: '32px' }}>
      <TokenSelectField token={token2} onChange={setToken2} />
      <AmountNumberField value={token2} onChange={setToken2} hasMax={false} />
    </Box>
  )
}
