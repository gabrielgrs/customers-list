import styled from 'styled-components'
import type { Color } from 'types/shared'

export const ActionIcon = styled.button<{ backgroundColor: Color }>`
  cursor: pointer;
  transition: 400ms linear;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  color: ${({ theme, backgroundColor }) => theme.contrasts[backgroundColor]};
  border: none;

  &:hover {
    opacity: 0.7;
  }
`
