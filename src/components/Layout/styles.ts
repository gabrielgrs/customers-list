import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 70px minmax(max-content, calc(100vh - 140px)) 70px;
  height: 100vh;
`
