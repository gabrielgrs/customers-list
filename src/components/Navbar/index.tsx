import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'
import useThemeContext from 'hooks/useThemeContext'
import Toggle from '../core/Toggle'
import * as S from './styles'

const Navbar = () => {
  const ref = useRef(null)
  const { isDarkTheme, onSetIsDarkTheme } = useThemeContext()

  return (
    <S.Nav ref={ref}>
      <Link href="/">
        <a>
          <Image src="/assets/logo.svg" height="25px" width="25px" alt="logo" priority />
        </a>
      </Link>

      <Toggle
        name="isDarkMode"
        checked={isDarkTheme}
        onChange={(event) => onSetIsDarkTheme(event.target.checked)}
      />
    </S.Nav>
  )
}

export default Navbar
