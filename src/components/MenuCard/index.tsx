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
import { Link } from 'react-router-dom'

type Props = {
  image?: string
  title: string
  note: number
  description: string
  infos: string[]
}
const MenuCard = ({ title, image, note, description, infos }: Props) => (
  <CardContainer>
    <DestaqueContainer>
      {infos.map((info) => (
        <Tag>{info}</Tag>
      ))}
    </DestaqueContainer>
    <div>
      <img src={image} alt={title} />
    </div>
    <InfoContainer>
      <TitleContainer>
        <h3>{title}</h3>
        <NoteContainer>
          <p>{note}</p>
          <img src={estrela} />
        </NoteContainer>
      </TitleContainer>
      <Description>{description}</Description>
      <Tag size="big">
        <Link to="perfil">Saiba mais</Link>
      </Tag>
    </InfoContainer>
  </CardContainer>
)

export default MenuCard
