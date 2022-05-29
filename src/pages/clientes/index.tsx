import type { NextPage } from 'next'
import { useState } from 'react'
import useFetchCustomers from 'hooks/useFetchCustomers'
import Customers from 'components/templates/Customers'

const ITEMS_PER_PAGE = 5

const Index: NextPage = () => {
  const [gridStyle, setGridStyle] = useState<'list' | 'cards'>('list')
  const [perPage, setPerPage] = useState(ITEMS_PER_PAGE)

  const { data, canLoadMore } = useFetchCustomers(perPage)

  return (
    <Customers
      gridStyle={gridStyle}
      onChangeGridStyle={setGridStyle}
      list={data}
      onLoadMore={() => setPerPage((p) => p + ITEMS_PER_PAGE)}
      canLoadMore={canLoadMore}
    />
  )
}

export default Index
