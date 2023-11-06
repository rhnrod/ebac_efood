import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.div`
  width: 472px;
  height: 398px;
  background-color: #fff;
  color: ${cores.primary};
  position: relative;
  border: 1px solid ${cores.primary};
  border-top: transparent;

  img:first-child {
    position: absolute;
    width: 472px;
    height: 217px;
    left: -1px;
    top: 0px;
  }
`

export const DestaqueContainer = styled.div`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`

export const InfoContainer = styled.div`
  padding: 8px;
  padding-top: 0;
  border-top: transparent;
  position: absolute;

  left: 8px;
  bottom: 8px;

  ${TagContainer} {
    cursor: pointer;
    margin-top: 8px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  gap: 8px;
`
