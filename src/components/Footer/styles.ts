import styled from 'styled-components'
import { Logo, cores } from '../../styles'

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${cores.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  font-size: 10px;
  color: ${cores.primary};
  text-align: center;

  ${Logo} {
    margin-top: 0px;
  }

  p {
    max-width: 480px;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;

  img {
    height: 24px;
    width: 24px;
    margin-right: 8px;
    cursor: pointer;
  }
`
