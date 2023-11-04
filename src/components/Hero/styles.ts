import styled from 'styled-components'

import background from '../../assets/images/background.png'
import { cores } from '../../styles'

export const HeroContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  height: 384px;
  width: 100%;
  background-image: url(${background});

  img {
    margin-top: 24px;
  }
`

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;
  color: ${cores.primary};
  text-align: center;
`
