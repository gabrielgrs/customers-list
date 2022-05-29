import type { Customer } from 'types/shared'
import * as S from './styles'

const ListView = ({ list }: { list: Customer[] }) => {
  return (
    <S.Grid>
      {list.map((customer) => (
        <S.Item key={customer.id}>{customer.name}</S.Item>
      ))}
    </S.Grid>
  )
}

export default ListView
