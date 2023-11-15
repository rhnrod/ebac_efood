import styled from 'styled-components'
import { HeroContainer } from '../Hero/styles'
import { Logo, breakpoints, cores } from '../../styles'

type Props = {
  capa: string
}

export const HeroHeaderContainer = styled(HeroContainer)`
  height: 186px;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.primary};
`

export const HeroImage = styled.div<Props>`
  height: 280px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.capa});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    gap: 8px;
  }

  p {
    width: 200px;
    color: ${cores.primary};

    @media (max-width: ${breakpoints.desktop}) {
      text-align: center;
      &:first-child {
        display: none;
      }
    }
  }

  ${Logo} {
    margin-top: 0px;
  }
`

export const ContainerInfo = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }

  h3 {
    font-size: 32px;
    font-weight: 900;
    color: #fff;
    margin-bottom: 32px;
  }
`
export const CategoriaInfo = styled.p`
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  padding-top: 24px;
  color: rgba(255, 255, 255, 0.5);
`

export const CartInfo = styled.p`
  cursor: pointer;
`
