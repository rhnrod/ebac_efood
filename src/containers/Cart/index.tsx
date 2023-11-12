import { useDispatch, useSelector } from 'react-redux'
import remover from '../../assets/images/remover.svg'
import Tag from '../../components/Tag'
import {
  Container,
  Sidebar,
  CartContainer,
  Values,
  CartItem,
  Button
} from './styles'
import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { priceAdjust } from '../../components/ProductCard'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeCart())
  }

  const removeFromCart = (id: number) => {
    if (items.length === 1) {
      dispatch(closeCart())
    }

    dispatch(remove(id))
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={close}></div>
      <Sidebar>
        <CartContainer>
          {items.map((item) => {
            return (
              <CartItem>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{priceAdjust(item.preco)}</p>
                </div>
                <Button onClick={() => removeFromCart(item.id)}>
                  <img src={remover} alt="botão remover" />
                </Button>
              </CartItem>
            )
          })}
        </CartContainer>
        <Values>
          <p>Valor total</p>
          <p>R$182,70</p>
        </Values>
        <Tag> Continuar com a entrega</Tag>
      </Sidebar>
    </Container>
  )
}

export default Cart
