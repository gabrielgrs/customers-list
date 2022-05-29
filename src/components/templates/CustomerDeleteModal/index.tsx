import Button from 'components/core/Button'
import Modal from 'components/Modal'
import * as S from './styles'
import type * as T from './types'

const CustomerDeleteModal = ({
  onSubmit,
  onClose,
  isRemoving,
  customerId,
}: T.CustomerDeleteModal) => {
  return (
    <Modal isOpen={typeof customerId === 'number'} onClose={onClose}>
      <div>
        <strong>Você realmente deseja excluir este cliente?</strong>
        <br />
        {isRemoving ? (
          <S.Removing>Removendo</S.Removing>
        ) : (
          <S.Buttons>
            <Button variant="silver" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={onSubmit}>
              Confirmar
            </Button>
          </S.Buttons>
        )}
      </div>
    </Modal>
  )
}

export default CustomerDeleteModal
