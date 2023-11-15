import ProductCard from '../../components/ProductCard'

import { ListContainer, ProductContainer } from './styles'

import { Menu } from '../MenuList'

type Props = {
  cardapio: Menu[]
}

const ProductList = ({ cardapio }: Props) => {
  return (
    <>
      <ProductContainer>
        <ListContainer>
          {cardapio.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              porcao={item.porcao}
              cardapio={item}
            />
          ))}
        </ListContainer>
      </ProductContainer>
    </>
  )
}

export default ProductList
