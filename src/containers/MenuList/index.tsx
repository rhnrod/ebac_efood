import MenuCard from '../../components/MenuCard'
import { MenuContainer } from './styles'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  restaurants: Restaurants[]
}

const MenuList = ({ restaurants }: Props) => (
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

export default MenuList
