import { List, Grid } from 'react-feather'
import Button from 'components/core/Button'
import GridView from './GridView'
import ListView from './ListView'
import * as S from './styles'
import type * as T from './types'

const CustomersTemplate = ({
  gridStyle,
  onChangeGridStyle,
  list,
  onLoadMore,
  canLoadMore,
}: T.CustomersTemplate) => {
  return (
    <S.Main>
      <S.Actions>
        <S.ActionButton onClick={() => onChangeGridStyle('cards')}>
          <Grid size={20} />
        </S.ActionButton>
        <S.ActionButton onClick={() => onChangeGridStyle('list')}>
          <List size={20} />
        </S.ActionButton>
      </S.Actions>
      {gridStyle === 'cards' && <ListView list={list} />}
      {gridStyle === 'list' && <GridView list={list} />}
      {canLoadMore && (
        <S.LoadMoreButtonWrapper key={list.length}>
          <Button onClick={onLoadMore}>Carregar mais</Button>
        </S.LoadMoreButtonWrapper>
      )}
    </S.Main>
  )
}

export default CustomersTemplate