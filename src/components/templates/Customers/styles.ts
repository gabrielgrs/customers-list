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
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`

export const ActionButton = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #ccc;
  background: none;
  color: ${({ theme }) => theme.colors.black};
  height: 24px;
  width: 24px;
  border-radius: 3px;
  transition: 400ms ease;

  opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
`

export const Spaced = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`

export const LoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  animation: ${buttonAppears} 500ms;
`
