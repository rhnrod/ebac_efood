import { Card, CardTitle } from './styles'
import Tag from '../Tag'
import fechar from '../../assets/images/fechar.svg'
import { Modal as ModalStyle, ModalContainer, ModalDescription } from './styles'
import { useDispatch } from 'react-redux'
import { add, openCart } from '../../store/reducers/cart'
import { useState } from 'react'
import { Menu } from '../../containers/MenuList'
import { getDescription } from '../MenuCard'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  cardapio: Menu
}

// eslint-disable-next-line react-refresh/only-export-components
export const priceAdjust = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductCard = ({
  nome,
  descricao,
  foto,
  porcao,
  preco,
  cardapio
}: Props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const addToCart = () => {
    dispatch(add(cardapio))
    setIsOpen(false)
    dispatch(openCart())
  }
  return (
    <>
      <Card>
        <img src={foto} alt="Pizza" />
        <CardTitle>{nome}</CardTitle>
        <p>{getDescription(descricao, 150)}</p>
        <div
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <Tag>Adicionar ao carrinho</Tag>
        </div>
      </Card>

      <ModalStyle className={isOpen ? 'visible' : ''}>
        <ModalContainer className={isOpen ? 'visible' : ''}>
          <div>
            <img src={foto} alt="pizza marguerita" />
          </div>
          <ModalDescription>
            <h3>{nome}</h3>
            <img src={fechar} alt="botão fechar" onClick={closeModal} />
            <div>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
            </div>
            <Tag size="small" onClick={addToCart}>
              <p>Adicionar ao carrinho - {priceAdjust(preco)}</p>
            </Tag>
          </ModalDescription>
        </ModalContainer>
        <div className={isOpen ? 'overlay' : ''} onClick={closeModal}></div>
      </ModalStyle>
    </>
  )
}

export default ProductCard
