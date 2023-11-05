import { HeroContainer, HeroTitle } from './styles'

import logo from '../../assets/images/logo.svg'
import { Logo } from '../../styles'
import { Link } from 'react-router-dom'

const Hero = () => (
  <HeroContainer>
    <Link to="/">
      <Logo src={logo} alt="logo" />
    </Link>
    <HeroTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeroTitle>
  </HeroContainer>
)

export default Hero
