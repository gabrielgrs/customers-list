import { useCallback, useEffect, useState } from 'react'
import type { Customer } from 'types/shared'
import { useToasts } from 'react-toast-notifications'
import { getCustomers } from 'api/customers'

const useFetchCustomers = (perPage: number) => {
  const [canLoadMore, setCanLoadMore] = useState(false)
  const [error, setError] = useState<unknown>(undefined)
  const [data, setData] = useState<Customer[]>([])
  const { addToast } = useToasts()

  const onFetch = useCallback(
    async (itemsPerPage: number) => {
      try {
        const { data, headers } = await getCustomers(itemsPerPage)
        setCanLoadMore(Number(headers['total-items']) > data.length)
        setData(data)
      } catch (err) {
        setError(err)
        addToast('Failed to fetch data', { appearance: 'error' })
      }
    },
    [addToast]
  )

  useEffect(() => {
    onFetch(perPage)
  }, [onFetch, perPage])

  return {
    canLoadMore,
    loading: !data.length && !error,
    data,
    error,
  }
}

export default useFetchCustomers
