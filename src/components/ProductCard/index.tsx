import { Card, CardTitle } from './styles'
import Tag from '../Tag'

export type Props = {
  id: number
  image: string
  title: string
  description: string
}

const ProductCard = ({ id, image, description, title }: Props) => (
  <Card key={id}>
    <img src={image} alt="Pizza" />
    <CardTitle>{title}</CardTitle>
    <p>{description}</p>
    <div>
      <Tag>Adicionar ao carrinho</Tag>
    </div>
  </Card>
)

export default ProductCard
