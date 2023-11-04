import MenuCard from '../../components/MenuCard'
import Card from '../../models/Card'
import { MenuContainer } from './styles'

export type Props = {
  cards: Card[]
}

const MenuList = ({ cards }: Props) => (
  <MenuContainer>
    {cards.map((card) => (
      <MenuCard
        key={card.id}
        image={card.image}
        title={card.title}
        description={card.description}
        note={card.note}
        infos={card.infos}
      ></MenuCard>
    ))}
  </MenuContainer>
)

export default MenuList
