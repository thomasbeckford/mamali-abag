import React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import { AppBar, Box, Tab, Tabs } from '@mui/material'
import TopBar from '../src/components/TopBar'
import Swap from '../src/components/Swap'
import TabPanel from '../src/components/TabPanel'
import ConnectWallet from '../src/components/ConnectWallet'
import { SwapButton } from '../src/components/Buttons'

const IndicatorProps = {
  style: {
    display: 'none',
  },
}

const Home: NextPage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Container>
        <Box
          sx={({ breakpoints }) => ({
            marginTop: '48px',
            [breakpoints.up('sm')]: {
              display: 'flex',
              filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25))',
            },
          })}
        >
          <Box bgcolor="#fff">
            <AppBar position="static" sx={{ boxShadow: 'none' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="swap-tabs"
                sx={{ background: '#fff', boxShadow: 'none' }}
                TabIndicatorProps={IndicatorProps}
              >
                <Tab label="Swap" {...a11yProps(0)} />
                <Tab label="Pool" {...a11yProps(1)} />
              </Tabs>
            </AppBar>

            <Container>
              <TabPanel value={value} index={0}>
                <Swap />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box minWidth="600px" />
              </TabPanel>
            </Container>
          </Box>
          <Box
            sx={({ breakpoints }) => ({
              background: '#fff',

              [breakpoints.up('sm')]: {
                marginTop: '48px',
              },
            })}
          >
            <Box
              sx={({ breakpoints }) => ({
                height: '100%',
                [breakpoints.down('sm')]: {
                  display: 'none',
                },
              })}
            >
              <ConnectWallet />
            </Box>
          </Box>
        </Box>
      </Container>

      {value === 0 && (
        <Box
          sx={({ breakpoints }) => ({
            display: 'none',
            [breakpoints.down('md')]: {
              background: '#fff',
              height: '96px',
              boxShadow: '0px 0px 24px #B3BCD0',
              width: '100%',
              margin: '0px',
              display: 'flex',
              padding: '18px 32px',
              position: 'sticky',
              bottom: 0,
            },
          })}
        >
          <SwapButton />
        </Box>
      )}
    </>
  )
}

export default Home
