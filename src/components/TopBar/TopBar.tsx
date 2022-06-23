import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { AuthContext } from '../../context/auth'

export default function TopBar() {
  const { isConnected, handleConnect, handleDisconnect, walletAddress } =
    React.useContext(AuthContext)

  const handleChangeNetwork = () => {
    console.log('Change network')
  }

  return (
    <AppBar
      position="static"
      sx={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Image
            src="/static/images/logo.png"
            alt="logo"
            width="100"
            height="30"
          />
        </Box>

        <Button
          onClick={isConnected ? handleChangeNetwork : handleConnect}
          variant="largeButton"
          sx={{
            '&:hover': {
              background: ({ customColors }) => customColors.ash,
            },
            background: ({ customColors }) =>
              isConnected ? customColors.ash : customColors.blue,
          }}
        >
          {isConnected && (
            <Box sx={{ marginRight: '8px', display: 'flex' }}>
              <Image
                src="/static/icons/ethereum.svg"
                alt="wallet"
                width="24px"
                height="24px"
              />
            </Box>
          )}
          <Typography variant="input" color="#fff">
            {walletAddress ? walletAddress : 'Connect wallet'}
          </Typography>
          {isConnected && (
            <Box sx={{ marginLeft: '8px', display: 'flex' }}>
              <Image
                src="/static/images/changeNetwork.svg"
                alt="wallet"
                width="16px"
                height="16px"
              />
            </Box>
          )}
        </Button>
        {isConnected && (
          <IconButton
            onClick={handleDisconnect}
            aria-label="disconnect"
            sx={{
              marginLeft: '32px',
              display: 'flex',
              background: ({ customColors }) => customColors.blue20,
              padding: '22px',
              placeContent: 'center',
              borderRadius: '0px',
            }}
          >
            <Image
              src="/static/images/walletDisconnect.svg"
              alt="wallet"
              width="16px"
              height="16px"
            />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}
