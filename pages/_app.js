import Head from 'next/head'
import { NextUIProvider, createTheme, Spacer } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import AppBar from '../components/AppBar.js'

const darkTheme = createTheme({
  type: 'dark'
})

const lightTheme = createTheme({
  type: 'light'
})

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>lastgram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <AppBar />
          <Component {...pageProps} />
          <Spacer />
          <div style={{ textAlign: 'center', color: '#fafafa' }}>
            <a href="https://t.me/lastgramsupport">lastgram support</a> - <a href="mailto:hi@lastgram.xyz">e-mail box</a>
          </div>
          <div style={{ textAlign: 'center', color: '#fafafa' }}>
          lastgram is not associated to telegram, nor last.fm. 
          </div>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  )
}

export default App