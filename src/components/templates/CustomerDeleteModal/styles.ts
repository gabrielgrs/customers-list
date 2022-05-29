import styled, { keyframes } from 'styled-components'

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 32px;
`

const removingAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`

export const Removing = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 32px;
  animation: ${removingAnimation} 3s infinite;
  color: ${({ theme }) => theme.colors.danger};
`
