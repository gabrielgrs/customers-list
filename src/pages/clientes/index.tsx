import type { NextPage } from 'next'
import { useState } from 'react'
import useFetchCustomers from 'hooks/useFetchCustomers'
import Customers from 'components/templates/Customers'

const ITEMS_PER_PAGE = 10

const Index: NextPage = () => {
  const [gridStyle, setGridStyle] = useState<'list' | 'cards'>('list')
  const [page, setPage] = useState(ITEMS_PER_PAGE)

  const { data, canLoadMore } = useFetchCustomers(page)

  return (
    <Customers
      gridStyle={gridStyle}
      onChangeGridStyle={setGridStyle}
      list={data}
      onLoadMore={() => setPage((p) => p + ITEMS_PER_PAGE)}
      canLoadMore={canLoadMore}
    />
  )
}

export default Index
