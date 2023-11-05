import { Logo } from '../../styles'
import {
  CategoriaInfo,
  ContainerInfo,
  HeroHeaderContainer,
  HeroImage,
  TextContainer
} from './styles'
import logo from '../../assets/images/logo.svg'

const HeroPerfil = () => (
  <>
    <HeroHeaderContainer>
      <TextContainer>
        <p>Restaurantes</p>
        <Logo src={logo} />
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
