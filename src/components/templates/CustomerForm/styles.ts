import styled from 'styled-components'
import type * as T from './types'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`

export const GridItem = styled.div<T.GridItem>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  justify-self: ${({ justifySelf }) => justifySelf};
`
