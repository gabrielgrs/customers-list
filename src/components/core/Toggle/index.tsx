import { ChangeEvent } from 'react'
import * as S from './styles'

type Props = {
  name: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Toggle({ name, checked, onChange }: Props) {
  return (
    <S.Toggle checked={checked} tabIndex={0}>
      <S.Checkbox name={name} type="checkbox" onChange={onChange} checked={checked} />
    </S.Toggle>
  )
}

export default Toggle
