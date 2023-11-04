import { HeroContainer } from './styles'

import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <HeroContainer>
    <img src={logo} alt="logo" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </HeroContainer>
)

export default Hero
