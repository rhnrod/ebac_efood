import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  color: ${cores.primary};
  position: relative;
  border: 1px solid ${cores.primary};

  img {
    width: 100%;
  }
`

export const DestaqueContainer = styled.div`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const InfoContainer = styled.div`
  padding: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled.p`
  margin: 16px 0;
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
