import Image from 'next/image'
import { useRef } from 'react'
import useThemeContext from 'hooks/useThemeContext'
import Toggle from '../core/Toggle'
import * as S from './styles'

const Navbar = () => {
  const ref = useRef(null)
  const { isDarkTheme, onSetIsDarkTheme } = useThemeContext()

  return (
    <S.Nav ref={ref}>
      <Image src="/assets/logo.svg" height="25px" width="25px" alt="logo" priority />

      <Toggle
        name="isDarkMode"
        checked={isDarkTheme}
        onChange={(event) => onSetIsDarkTheme(event.target.checked)}
      />
    </S.Nav>
  )
}

export default Navbar
