import Link from 'next/link'
import { Edit, Trash } from 'react-feather'
import ActionIcon from 'components/ActionIcon'
import * as S from './styles'
import type * as T from './types'

const GridView = ({ list, onSelectToRemove }: T.GridView) => {
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
              <strong>E-mail:</strong>
              <br />
              {customer.email}
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

            <ActionIcon backgroundColor="danger" onClick={() => onSelectToRemove(customer.id)}>
              <Trash />
            </ActionIcon>
          </S.Actions>
        </S.Item>
      ))}
    </S.Grid>
  )
}

export default GridView
