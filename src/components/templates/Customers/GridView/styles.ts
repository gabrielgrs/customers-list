import { rgba } from 'polished'
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

export const Grid = styled.div`
  display: grid;
  overflow-x: hidden;

  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${({ theme }) => theme.breakPoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  animation: ${appear} 1s;
  display: flex;
  justify-content: space-between;
  transition: 400ms linear;

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.black, 0.04)};
  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
