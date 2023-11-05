import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 320px;
  height: fit-content;
  background-color: ${cores.primary};
  color: ${cores.secondary};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 14px;
    line-height: 22px;
  }
  div {
    text-align: center;
    font-size: 16px;
    height: 24px;
    width: 100%;

    ${TagContainer} {
      background-color: ${cores.secondary};
      color: ${cores.primary};
    }
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
`