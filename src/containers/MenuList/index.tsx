import { useEffect, useState } from 'react'
import MenuCard from '../../components/MenuCard'
import { Loading, MenuContainer } from './styles'

export interface Restaurants {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const MenuList = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <MenuContainer>
      {restaurants.map((restaurant) => (
        <MenuCard
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.capa}
          title={restaurant.titulo}
          description={restaurant.descricao}
          note={restaurant.avaliacao}
          emphasis={restaurant.destacado}
          category={restaurant.tipo}
        ></MenuCard>
      ))}
    </MenuContainer>
  )
}

export default MenuList
