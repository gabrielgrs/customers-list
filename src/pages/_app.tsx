import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'styles/theme'
import Globals from 'styles/Globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Customers List</title>
        <meta name="description" content="Customers List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Globals />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
