import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

export const fromLeft = keyframes`
  from {
    transform: translateX(-100vh);
  }

  to {
    transform: translateX(0);
  }
`

export const fromRight = keyframes`
  from {
    transform: translateX(100vh);
  }

  to {
    transform: translateX(0);
  }
`

export const Informations = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`

export const Grid = styled.div`
  display: grid;
  overflow-x: hidden;

  grid-template-columns: 1fr;
  gap: 16px;

  > :nth-child(odd) {
    animation: ${fromLeft} 1s;
  }

  > :nth-child(even) {
    animation: ${fromRight} 1s;
    background: ${({ theme }) => rgba(theme.colors.black, 0.03)};
  }
`

export const Item = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px transparent;
  transition: 400ms;

  &:hover {
    border: solid 1px #ccc;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`
