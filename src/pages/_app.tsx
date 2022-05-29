import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import type { NextPageContext } from 'next'
import Head from 'next/head'
import nookies from 'nookies'
import ThemeProvider from 'contexts/Theme'
import { ToastProvider } from 'react-toast-notifications'
import Globals from 'styles/Globals'
import Layout, { ComponentWrapper } from 'components/Layout'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

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
      <ToastProvider autoDismiss autoDismissTimeout={5000}>
        <ThemeProvider startWithDarkTheme={startWithDarkTheme}>
          <Globals />
          <Layout>
            <Navbar />
            <ComponentWrapper>
              <Component {...pageProps} />
            </ComponentWrapper>
            <Footer />
          </Layout>
        </ThemeProvider>
      </ToastProvider>
    </Fragment>
  )
}

MyApp.getInitialProps = async (ctx: NextPageContext) => {
  return {
    startWithDarkTheme: nookies.get(ctx, 'darkTheme'),
  }
}

export default MyApp
