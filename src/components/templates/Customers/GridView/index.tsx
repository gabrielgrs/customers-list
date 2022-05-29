import Link from 'next/link'
import { Edit, Trash } from 'react-feather'
import type { Customer } from 'types/shared'
import ActionIcon from 'components/ActionIcon'
import * as S from './styles'

const GridView = ({ list }: { list: Customer[] }) => {
  return (
    <S.Grid>
      {list.map((customer) => (
        <S.Item key={customer.id}>
          <S.Informations>
            <span>
              <strong>Nome:</strong>
              <br />
              {customer.name}
            </span>
            <span>
              <strong>Nome:</strong>
              <br />
              {customer.name}
            </span>
          </S.Informations>
          <S.Actions>
            <Link href={`/clientes/editar/${customer.id}`}>
              <a>
                <ActionIcon backgroundColor="warning">
                  <Edit />
                </ActionIcon>
              </a>
            </Link>

            <ActionIcon backgroundColor="danger" onClick={() => alert('remove')}>
              <Trash />
            </ActionIcon>
          </S.Actions>
        </S.Item>
      ))}
    </S.Grid>
  )
}

export default GridView
