import { Logo } from '../../styles'
import { FooterContainer, SocialMediaContainer } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/SocialMedia_Instagram.svg'
import facebook from '../../assets/images/SocialMedia_Facebook.svg'
import twitter from '../../assets/images/SocialMedia_Twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <FooterContainer>
    <div>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
    </div>
    <SocialMediaContainer>
      <img src={instagram} alt="Instagram" />
      <img src={facebook} alt="Instagram" />
      <img src={twitter} alt="Instagram" />
    </SocialMediaContainer>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
