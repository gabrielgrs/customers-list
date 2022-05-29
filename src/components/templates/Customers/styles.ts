import styled, { keyframes } from 'styled-components'

const buttonAppears = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Main = styled.main`
  padding: 32px 3%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #ccc;
  background: none;
  color: ${({ theme }) => theme.colors.black};
  height: 24px;
  width: 24px;
  border-radius: 3px;
`

export const LoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  animation: ${buttonAppears} 500ms;
`