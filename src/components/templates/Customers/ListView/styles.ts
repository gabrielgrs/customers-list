import styled, { keyframes } from 'styled-components'

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

export const Item = styled.div`
  border: solid 1px #ccc;
  padding: 32px;
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
  }
`
