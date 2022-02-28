import Head from 'next/head'
import { NextUIProvider } from '@nextui-org/react';

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>lastgram</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </div>
  )
}

export default App