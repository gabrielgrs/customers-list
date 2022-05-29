import styled, { keyframes } from 'styled-components'

export const appear = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const Item = styled.div`
  border: solid 1px #ccc;
  padding: 32px;
  animation: ${appear} 1s;
`

export const Grid = styled.div`
  display: grid;
  overflow-x: hidden;

  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`
