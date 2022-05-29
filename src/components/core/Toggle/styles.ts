import styled, { css } from 'styled-components'

export const Toggle = styled.div<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    cursor: pointer;
    height: 24px;
    width: 40px;
    background: ${theme.colors.black};
    border-radius: 50px;
    position: relative;
    transition: 0.4s all;

    &:after {
      cursor: pointer;
      content: '';
      position: absolute;
      height: 18px;
      width: 18px;
      background: ${theme.colors.white};
      border-radius: 50%;
      top: 3px;
      transition: 0.4s;

      ${checked
        ? css`
            transform: translateX(3px);
          `
        : css`
            transform: translateX(18px);
          `}
    }
  `}
`

export const Checkbox = styled.input`
  cursor: pointer !important;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`
