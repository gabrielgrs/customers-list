import * as S from './styles'

function Footer() {
  return (
    <S.FooterWrapper>
      Made with 💖 by{' '}
      <S.UserLink href="https://github.com/gabrielgrs" target="_blank" rel="noreferrer">
        @gabrielgrs
      </S.UserLink>
    </S.FooterWrapper>
  )
}

export default Footer
