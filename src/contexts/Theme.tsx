import { createContext, useCallback, useState } from 'react'
import nookies from 'nookies'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'styles/theme'
import * as T from './types'

export const ThemeContext = createContext<T.ThemeContext>({
  isDarkTheme: false,
  onSetIsDarkTheme: () => null,
})

function ThemeProvider({ children, startWithDarkTheme }: T.ThemeProvider) {
  const [isDarkTheme, setIsDarkTheme] = useState(startWithDarkTheme)

  const onSetIsDarkTheme = useCallback((toSet: boolean) => {
    if (toSet) nookies.set(null, 'darkTheme', 'true', { path: '/' })
    else nookies.destroy(null, 'darkTheme', { path: '/' })
    setIsDarkTheme(toSet)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, onSetIsDarkTheme }}>
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
