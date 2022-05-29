import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  bottom: 8px;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  gap: 4px;
`

export const UserLink = styled.a`
  transition: 0.4s;

  &:hover {
    opacity: 0.9;
  }
`
