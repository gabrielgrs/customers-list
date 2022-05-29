import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'
import * as theme from 'styles/theme'

const customRender = (ui: ReactElement, { ...renderOptions }: RenderOptions = {}) =>
  render(<ThemeProvider theme={theme.default}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
