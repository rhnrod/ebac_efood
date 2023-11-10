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
  category: string
  emphasis: boolean
  id: number
}
const MenuCard = ({
  title,
  image,
  note,
  description,
  category,
  emphasis,
  id
}: Props) => {
  const getDescription = (desc: string) => {
    if (desc.length > 240) {
      return desc.slice(0, 237) + '...'
    }
  }

  return (
    <CardContainer>
      <DestaqueContainer>
        {emphasis && <Tag>Destaque da semana</Tag>}
        <Tag>{category}</Tag>
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
        <Description>{getDescription(description)}</Description>
        <Tag size="big">
          <Link to={`perfil/${id}`}>Saiba mais</Link>
        </Tag>
      </InfoContainer>
    </CardContainer>
  )
}

export default MenuCard
