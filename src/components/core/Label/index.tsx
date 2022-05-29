import * as S from './styles'
import type * as T from './types'

function Label({ children }: T.Label) {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Label
