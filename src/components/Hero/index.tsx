import { HeroContainer, HeroTitle } from './styles'

import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <HeroContainer>
    <img src={logo} alt="logo" />
    <HeroTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeroTitle>
  </HeroContainer>
)

export default Hero
