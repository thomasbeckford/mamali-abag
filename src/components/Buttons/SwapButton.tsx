import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { ErrorContext } from '../../context/error'

export default function SwapButton() {
  const { error } = useContext(ErrorContext)
  const { isConnected } = React.useContext(AuthContext)
  const canSwap = isConnected && !error

  return (
    <Button
      sx={({ breakpoints }) => ({
        width: '100%',
        background: ({ customColors }) =>
          canSwap ? customColors.blue : customColors.ash,
        marginTop: '32px',
        marginBottom: '24px',
        padding: '18px 32px',
        color: ({ customColors }) =>
          canSwap ? customColors.white : customColors.darkAsh,
        boxShadow: 'none',
        [breakpoints.down('md')]: {
          margin: '0px',
        },
      })}
    >
      <Typography variant="buttonLarge">Swap</Typography>
    </Button>
  )
}
