import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AmountTextField from '../AmountNumberField'
import TokenSelectField from '../TokenSelectField'
import { ErrorContext } from '../../context/error'
import { SwapContext } from '../../context/swap'

export default function FromSwap() {
  const { token1, setToken1 } = useContext(SwapContext)
  const { error, setError } = useContext(ErrorContext)

  useEffect(() => {
    if (Number(token1.amount) < 0.1) {
      setError('Minimum amount for conversion is 0.1')
    } else {
      setError('')
    }
  }, [token1.amount])

  // useEffect(() => {}, [swapSelections])

  const infoLabel = (
    <Typography
      variant="helperText"
      sx={{
        color: ({ customColors }) =>
          error ? customColors.red : customColors.darkAsh,
      }}
    >
      {error ? error : 'Max to use all your funds'}
    </Typography>
  )

  return (
    <Box sx={{ display: 'flex', gap: 2, marginTop: '48px' }}>
      <TokenSelectField token={token1} onChange={setToken1} />
      <AmountTextField
        value={token1}
        onChange={setToken1}
        infoLabel={infoLabel}
      />
    </Box>
  )
}
