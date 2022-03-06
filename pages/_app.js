import Head from 'next/head'
import { AppBar, BarPad } from '../components/AppBar'
import VelvetProvider from '../components/VelvetProvider'

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>lastgram</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <VelvetProvider>
        <BarPad><Component {...pageProps} /></BarPad>
        <AppBar />
      </VelvetProvider>
    </div>
  )
}

export default App