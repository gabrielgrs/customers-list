import type { Customer } from 'types/shared'

export type GridView = {
  list: Customer[]
  onSelectToRemove: (customerId: number) => void
}
