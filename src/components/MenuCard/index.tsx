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

// eslint-disable-next-line react-refresh/only-export-components
export const getDescription = (desc: string, count: number) => {
  if (desc.length > count) {
    return desc.slice(0, count - 3) + '...'
  }
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
  return (
    <CardContainer>
      <DestaqueContainer>
        {emphasis && <Tag>Destaque da semana</Tag>}
        <Tag>{category.charAt(0).toUpperCase() + category.slice(1)}</Tag>
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
        <Description>{getDescription(description, 240)}</Description>
        <Link to={`perfil/${id}`}>
          <Tag size="big">Saiba mais</Tag>
        </Link>
      </InfoContainer>
    </CardContainer>
  )
}

export default MenuCard
