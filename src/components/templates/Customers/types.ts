import type { Customer } from 'types/shared'

type Grid = 'cards' | 'list'

export type CustomersTemplate = {
  gridStyle: Grid
  onChangeGridStyle: (type: Grid) => void
  list: Customer[]
  onLoadMore: () => void
  canLoadMore: boolean
}
