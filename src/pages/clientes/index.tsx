import type { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { removeCustomer } from 'api/customers'
import { useToasts } from 'react-toast-notifications'
import useFetchCustomers from 'hooks/useFetchCustomers'
import Customers from 'components/templates/Customers'
import CustomerDeleteModal from 'components/templates/CustomerDeleteModal'

const ITEMS_PER_PAGE = 5

const Index: NextPage = () => {
  const [isRemoving, setIsRemoving] = useState(false)
  const [gridStyle, setGridStyle] = useState<'list' | 'cards'>('list')
  const [perPage, setPerPage] = useState(ITEMS_PER_PAGE)
  const [customerIdToDelete, setCustomerIdToDelete] = useState<undefined | number>(undefined)

  const { data, canLoadMore, refetch } = useFetchCustomers(perPage)
  const { addToast } = useToasts()

  const onRemoveCustomer = async (customerId: number) => {
    try {
      setIsRemoving(true)
      await removeCustomer(customerId)
      setCustomerIdToDelete(undefined)
      refetch(ITEMS_PER_PAGE)
    } catch (error) {
      addToast('Falha ao remover cliente', { appearance: 'error' })
    } finally {
      setIsRemoving(false)
    }
  }

  return (
    <Fragment>
      <Customers
        gridStyle={gridStyle}
        onChangeGridStyle={setGridStyle}
        list={data}
        onLoadMore={() => setPerPage((p) => p + ITEMS_PER_PAGE)}
        canLoadMore={canLoadMore}
        onSelectToRemove={(id) => setCustomerIdToDelete(id)}
      />
      <CustomerDeleteModal
        onClose={() => {
          setCustomerIdToDelete(undefined)
        }}
        isRemoving={isRemoving}
        customerId={customerIdToDelete}
        onSubmit={() => onRemoveCustomer(customerIdToDelete as number)}
      />
    </Fragment>
  )
}

export default Index
