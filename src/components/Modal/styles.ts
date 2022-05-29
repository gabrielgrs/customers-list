import styled, { css } from 'styled-components'

export const Overlay = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.4s;
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
  `}
`

export const Modal = styled.div`
  ${({ theme }) => css`
    padding: 32px 24px;
    background: ${theme.colors.white};
    width: 100%;
    max-width: 400px;
    height: max-content;
    max-height: 500px;
    border-radius: 4px;
    border: ${theme.colors.primary} solid 2px;
    overflow-y: auto;
  `};
`
