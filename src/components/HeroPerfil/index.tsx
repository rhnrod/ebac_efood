import { Logo } from '../../styles'
import {
  CartInfo,
  CategoriaInfo,
  ContainerInfo,
  HeroHeaderContainer,
  HeroImage,
  TextContainer
} from './styles'
import logo from '../../assets/images/logo.svg'
import { Link, useParams } from 'react-router-dom'
import { Loading } from '../../containers/MenuList/styles'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../store/reducers/cart'
import { useGetProductsQuery } from '../../services/api'
import { RootReducer } from '../../store'

const HeroPerfil = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data: restaurant } = useGetProductsQuery(id!)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const open = () => {
    dispatch(openCart())
  }

  if (!restaurant) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <>
      <HeroHeaderContainer>
        <TextContainer>
          <p>Restaurantes</p>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <CartInfo onClick={open}>
            {items.length} produto(s) no carrinho
          </CartInfo>
        </TextContainer>
      </HeroHeaderContainer>
      <HeroImage capa={restaurant.capa}>
        <ContainerInfo>
          <CategoriaInfo>{restaurant.tipo}</CategoriaInfo>
          <h3>{restaurant.titulo}</h3>
        </ContainerInfo>
      </HeroImage>
    </>
  )
}

export default HeroPerfil
