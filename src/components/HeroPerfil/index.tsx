import { Logo } from '../../styles'
import {
  CategoriaInfo,
  ContainerInfo,
  HeroHeaderContainer,
  HeroImage,
  TextContainer
} from './styles'
import logo from '../../assets/images/logo.svg'
import { Link, useParams } from 'react-router-dom'
import { Restaurants } from '../../containers/MenuList'
import { useEffect, useState } from 'react'
import { Loading } from '../../containers/MenuList/styles'

const HeroPerfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
          <p>0 produto(s) no carrinho</p>
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
