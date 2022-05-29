import type { Customer } from 'types/shared'

export type ListView = {
  list: Customer[]
  onSelectToRemove: (customerId: number) => void
}
