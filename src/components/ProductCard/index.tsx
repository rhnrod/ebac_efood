import { Card, CardTitle } from './styles'
import Tag from '../Tag'

export type Props = {
  id: number
  image: string
  title: string
  description: string
  click: () => void
}

const ProductCard = ({ id, image, description, title, click }: Props) => (
  <Card key={id}>
    <img src={image} alt="Pizza" />
    <CardTitle>{title}</CardTitle>
    <p>{description}</p>
    <div onClick={click}>
      <Tag>Adicionar ao carrinho</Tag>
    </div>
  </Card>
)

export default ProductCard
