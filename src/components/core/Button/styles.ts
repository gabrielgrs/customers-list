import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
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
