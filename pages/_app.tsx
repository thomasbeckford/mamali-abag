import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../src/theme/mui'
import createEmotionCache from '../src/createEmotionCache'
import '../styles/globals.css'
import ErrorProvider from '../src/context/error'
import SwapProvider from '../src/context/swap'
import AuthProvider from '../src/context/auth'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AuthProvider>
          <ErrorProvider>
            <SwapProvider>
              <Component {...pageProps} />
            </SwapProvider>
          </ErrorProvider>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
