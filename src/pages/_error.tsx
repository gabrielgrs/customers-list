import NextErrorComponent from 'next/error'
import * as Sentry from '@sentry/nextjs'
import { NextPageContext } from 'next'

type Props = {
  statusCode: number
  hasGetInitialPropsRun: boolean
  err: Record<string, any>
}

const MyError = ({ statusCode, hasGetInitialPropsRun, err }: Props) => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err)
  }

  return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async (context: NextPageContext) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context)

  const { res, err, asPath } = context

  // @ts-ignore
  errorInitialProps.hasGetInitialPropsRun = true

  if (res?.statusCode === 404) {
    return errorInitialProps
  }

  if (err) {
    Sentry.captureException(err)

    await Sentry.flush(2000)

    return errorInitialProps
  }
  Sentry.captureException(new Error(`_error.js getInitialProps missing data at path: ${asPath}`))
  await Sentry.flush(2000)

  return errorInitialProps
}

export default MyError
