import { ReactElement, useEffect, useRef } from 'react'
import useClickOutside from 'hooks/useClickOutside'
import * as S from './styles'

type Props = {
  children: ReactElement
  isOpen: boolean
  onClose: () => void
}

function Modal({ children, isOpen, onClose }: Props) {
  const ref = useRef<any>(null)

  useClickOutside(ref, () => onClose())

  useEffect(() => {
    const handleKeyDown = (event: any) => isOpen && event.key === 'Escape' && onClose()

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <S.Overlay isOpen={isOpen}>
      <S.Modal ref={ref}>{children}</S.Modal>
    </S.Overlay>
  )
}

export default Modal
