import { forwardRef } from 'react'
import * as S from './styles'
import type * as T from './types'

function Input(props: T.Input, ref: any) {
  return <S.Input ref={ref} {...props} />
}

export default forwardRef(Input)
