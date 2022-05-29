import styled, { css } from 'styled-components'

export const Input = styled.input<{ invalid?: boolean }>`
  ${({ theme, invalid }) => css`
    height: 32px;
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: solid ${invalid ? theme.colors.danger : theme.colors.silver} 1px;
    transition: 0.4s;
    color: ${theme.colors.black};

    &:focus {
      border: none;
      outline: none;
      border-bottom: solid ${theme.colors.primary} 1px;
    }
  `}
`
