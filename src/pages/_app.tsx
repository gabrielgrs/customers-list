import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import type { NextPageContext } from 'next'
import Head from 'next/head'
import nookies from 'nookies'
import ThemeProvider from 'contexts/Theme'
import Globals from 'styles/Globals'

function MyApp({
  Component,
  pageProps,
  startWithDarkTheme,
}: AppProps & { startWithDarkTheme: boolean }) {
  return (
    <Fragment>
      <Head>
        <title>Customers List</title>
        <meta name="description" content="Customers List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider startWithDarkTheme={startWithDarkTheme}>
        <Globals />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

MyApp.getInitialProps = async (ctx: NextPageContext) => {
  return {
    startWithDarkTheme: nookies.get(ctx, 'darkTheme'),
  }
}

export default MyApp
