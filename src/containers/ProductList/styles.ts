import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProductContainer = styled.div`
  padding-top: 56px;
  padding-bottom: 120px;
  width: 100%;
  display: flex;

  @media (max-width: ${breakpoints.desktop}) {
    width: 720px;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    flex-direction: column;
  }
`

export const ListContainer = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`
