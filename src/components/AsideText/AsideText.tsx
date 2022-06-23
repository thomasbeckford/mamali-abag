import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { ErrorContext } from '../../context/error'
import { SwapContext } from '../../context/swap'
import TransactionDetailsText from './TransactionDetailsText'

export default function AsideText() {
  const { swapSelections } = useContext(SwapContext)
  const { error } = useContext(ErrorContext)
  const { isConnected } = useContext(AuthContext)

  const NotConnectedText = () => (
    <Typography variant="body2" sx={{ marginTop: '32px' }}>
      To start using the app, your wallet needs to be connected :)
    </Typography>
  )

  const ErrorText = () => (
    <Typography variant="body2">
      Choose the amount you want to swap on your balance. You can check it on
      the top of the amount field that you want to swap :D
    </Typography>
  )

  const DefaultText = () => (
    <>
      <Typography variant="body2" sx={{ marginTop: '32px' }}>
        You can choose any token on the list, if there is some missing you can
        try adding it by the
      </Typography>
      <Typography variant="body2bold">contract address.</Typography>
    </>
  )

  return (
    <Box>
      {!isConnected ? (
        <NotConnectedText />
      ) : error ? (
        <ErrorText />
      ) : swapSelections ? (
        <TransactionDetailsText />
      ) : (
        <DefaultText />
      )}
    </Box>
  )
}
