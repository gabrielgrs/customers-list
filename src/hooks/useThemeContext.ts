import { useContext } from 'react'
import { ThemeContext } from 'contexts/Theme'

const useThemeContext = () => useContext(ThemeContext)

export default useThemeContext
