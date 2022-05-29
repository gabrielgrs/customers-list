import '../styles/globals.css'
import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Customers List</title>
        <meta name="description" content="Customers List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
