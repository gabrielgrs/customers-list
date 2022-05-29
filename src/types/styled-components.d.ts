import * as theme from 'styles/theme'

type Theme = typeof theme.default

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
