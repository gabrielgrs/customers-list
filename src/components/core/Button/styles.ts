import styled from 'styled-components'
import * as T from './types'

export const Button = styled.button<T.Button>`
  cursor: pointer;
  background: ${({ theme, variant = 'primary' }) => theme.colors[variant]};
  color: ${({ theme, variant = 'primary' }) => theme.contrasts[variant]};
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  transition: 400ms;
  opacity: ${({ disabled }) => disabled && '0.7'};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};

  &:hover {
    opacity: 0.7;
  }
`
