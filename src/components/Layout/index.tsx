import * as S from './styles'
import type * as T from './types'

function Layout({ children }: T.Layout) {
  return <S.Grid>{children}</S.Grid>
}

export default Layout
