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
import { useGetRestaurantQuery } from '../../services/api'
import { RootReducer } from '../../store'

const HeroPerfil = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data: restaurant } = useGetRestaurantQuery(id!)
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
          <Link to="/">
            <p>Restaurantes</p>
          </Link>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <CartInfo onClick={open}>
            {items.length} {items.length === 1 ? 'produto' : 'produtos'} no
            carrinho
          </CartInfo>
        </TextContainer>
      </HeroHeaderContainer>
      <HeroImage capa={restaurant.capa}>
        <ContainerInfo>
          <CategoriaInfo>
            {restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)}
          </CategoriaInfo>
          <h3>{restaurant.titulo}</h3>
        </ContainerInfo>
      </HeroImage>
    </>
  )
}

export default HeroPerfil
