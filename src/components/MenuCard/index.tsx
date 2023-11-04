import {
  CardContainer,
  Description,
  DestaqueContainer,
  InfoContainer,
  NoteContainer,
  TitleContainer
} from './styles'
import sushi from '../../assets/images/sushi.png'
// import massa from '../../assets/images/massa.png'
import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  image?: 'sushi' | 'massa'
  title: string
  note: number
  description: string
}
const MenuCard = ({ title, note, description }: Props) => (
  <CardContainer>
    <img src={sushi} alt={title} />
    <DestaqueContainer>
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
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
