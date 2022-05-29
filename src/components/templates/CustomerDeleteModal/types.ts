export type CustomerDeleteModal = {
  onSubmit: () => void
  onClose: () => void
  isRemoving: boolean
  customerId: number | undefined
}
