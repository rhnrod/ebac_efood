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

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  div {
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 16.41px;
    height: 24px;
    width: 100%;
    cursor: pointer;

    ${TagContainer} {
      background-color: ${cores.secondary};
      color: ${cores.primary};
      display: flex;
      justify-content: center;
    }
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
`
