import { Logo } from '../../styles'
import {
  CategoriaInfo,
  ContainerInfo,
  HeroHeaderContainer,
  HeroImage,
  TextContainer
} from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const HeroPerfil = () => (
  <>
    <HeroHeaderContainer>
      <TextContainer>
        <p>Restaurantes</p>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </TextContainer>
    </HeroHeaderContainer>
    <HeroImage>
      <ContainerInfo>
        <CategoriaInfo>Italiana</CategoriaInfo>
        <h3>La Dolce Vita Trattoria</h3>
      </ContainerInfo>
    </HeroImage>
  </>
)

export default HeroPerfil
