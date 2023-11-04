import {
  CardContainer,
  Description,
  DestaqueContainer,
  InfoContainer,
  NoteContainer,
  TitleContainer
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  image?: string
  title: string
  note: number
  description: string
  infos: string[]
}
const MenuCard = ({ title, image, note, description, infos }: Props) => (
  <CardContainer>
    <img src={image} alt={title} />
    <DestaqueContainer>
      {infos.map((info) => (
        <Tag>{info}</Tag>
      ))}
    </DestaqueContainer>
    <InfoContainer>
      <TitleContainer>
        <h3>{title}</h3>
        <NoteContainer>
          <p>{note}</p>
          <img src={estrela} />
        </NoteContainer>
      </TitleContainer>
      <Description>{description}</Description>
      <Tag size="big">Saiba mais</Tag>
    </InfoContainer>
  </CardContainer>
)

export default MenuCard
