import * as S from './styles'
import type * as T from './types'

const ActionIcon = ({ children, onClick, backgroundColor = 'primary' }: T.Action) => {
  return (
    <S.ActionIcon backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </S.ActionIcon>
  )
}

export default ActionIcon
