import { useDispatch, useSelector } from 'react-redux'
import remover from '../../assets/images/remover.svg'
import Tag from '../../components/Tag'
import {
  Container,
  Sidebar,
  CartContainer,
  Values,
  CartItem,
  Button,
  InputGroup,
  TagGroup,
  Row,
  PaymentContainer,
  TextContainer
} from './styles'
import { RootReducer } from '../../store'
import { clear, closeCart, remove } from '../../store/reducers/cart'
import { priceAdjust } from '../../components/ProductCard'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [paymentStep, setPaymentStep] = useState('cart')
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

  const getTotalPrice = () => {
    return items.reduce((acc, value) => {
      return acc + value.preco
    }, 0)
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={close}></div>
      <Sidebar>
        <PaymentContainer className={paymentStep === 'cart' ? 'visible' : ''}>
          {items.length > 0 ? (
            <>
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
                <p>{priceAdjust(getTotalPrice())}</p>
              </Values>
              <Tag onClick={() => setPaymentStep('delivery')}>
                Continuar com a entrega
              </Tag>
            </>
          ) : (
            <TextContainer textAlign="center">
              <p>
                Seu carrinho está vazio. Adicione pelo menos um pedido para
                prosseguir.
              </p>
            </TextContainer>
          )}
        </PaymentContainer>

        <PaymentContainer
          className={paymentStep === 'delivery' ? 'visible' : ''}
        >
          <form>
            <h3>Entrega</h3>
            <InputGroup>
              <label htmlFor="">Quem irá receber</label>
              <input type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="">Endereço</label>
              <input type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="">Cidade</label>
              <input type="text" />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="">Número</label>
                <input type="text" />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="">Complemento (opcional)</label>
              <input type="text" />
            </InputGroup>
            <TagGroup>
              <Tag onClick={() => setPaymentStep('payment')}>
                Continuar com o pagamento
              </Tag>
              <Tag onClick={() => setPaymentStep('cart')}>
                Voltar para o carrinho
              </Tag>
            </TagGroup>
          </form>
        </PaymentContainer>
        <PaymentContainer
          className={paymentStep === 'payment' ? 'visible' : ''}
        >
          <form>
            <h3>Pagamento - Valor a pagar {priceAdjust(getTotalPrice())}</h3>
            <InputGroup>
              <label htmlFor="">Nome no cartão</label>
              <input type="text" />
            </InputGroup>
            <Row small>
              <InputGroup>
                <label htmlFor="">Número do cartão</label>
                <input type="text" />
              </InputGroup>
              <InputGroup maxWidth="87px">
                <label htmlFor="">CVV</label>
                <input type="text" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="">Mês de vencimento</label>
                <input type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="">Ano de vencimento</label>
                <input type="text" />
              </InputGroup>
            </Row>
            <TagGroup>
              <Tag
                onClick={() => {
                  setPaymentStep('finish')
                  dispatch(clear())
                }}
              >
                Finalizar pagamento
              </Tag>
              <Tag onClick={() => setPaymentStep('delivery')}>
                Voltar para a edição de endereço
              </Tag>
            </TagGroup>
          </form>
        </PaymentContainer>
        <PaymentContainer className={paymentStep === 'finish' ? 'visible' : ''}>
          <h3>Pedido realizado - #PEDIDO</h3>
          <TextContainer>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </TextContainer>
          <TagGroup>
            <Tag
              onClick={() => {
                setPaymentStep('cart')
                dispatch(closeCart())
              }}
            >
              Concluir
            </Tag>
          </TagGroup>
        </PaymentContainer>
      </Sidebar>
    </Container>
  )
}

export default Cart
