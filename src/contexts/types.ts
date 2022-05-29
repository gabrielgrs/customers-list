import type { ReactNode } from 'react'

export type ThemeContext = {
  isDarkTheme: boolean
  onSetIsDarkTheme: (isDarkTheme: boolean) => void
}

export type ThemeProvider = {
  children: ReactNode
  startWithDarkTheme: boolean
}
