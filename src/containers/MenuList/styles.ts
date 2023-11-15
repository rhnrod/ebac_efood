import styled from 'styled-components'
import { Container, breakpoints } from '../../styles'

export const MenuContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 32px;
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 360px;
`
