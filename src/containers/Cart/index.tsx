import { useDispatch, useSelector } from 'react-redux'
import remover from '../../assets/images/remover.svg'
import Tag from '../../components/Tag'
import * as S from './styles'
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
    <S.Container className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={close}></div>
      <S.Sidebar>
        <S.PaymentContainer className={paymentStep === 'cart' ? 'visible' : ''}>
          {items.length > 0 ? (
            <>
              <S.CartContainer>
                {items.map((item) => {
                  return (
                    <S.CartItem>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{priceAdjust(item.preco)}</p>
                      </div>
                      <S.Button onClick={() => removeFromCart(item.id)}>
                        <img src={remover} alt="botão remover" />
                      </S.Button>
                    </S.CartItem>
                  )
                })}
              </S.CartContainer>
              <S.Values>
                <p>Valor total</p>
                <p>{priceAdjust(getTotalPrice())}</p>
              </S.Values>
              <Tag onClick={() => setPaymentStep('delivery')}>
                Continuar com a entrega
              </Tag>
            </>
          ) : (
            <S.TextContainer textAlign="center">
              <p>
                Seu carrinho está vazio. Adicione pelo menos um pedido para
                prosseguir.
              </p>
            </S.TextContainer>
          )}
        </S.PaymentContainer>

        <S.PaymentContainer
          className={paymentStep === 'delivery' ? 'visible' : ''}
        >
          <form>
            <h3>Entrega</h3>
            <S.InputGroup>
              <label htmlFor="">Quem irá receber</label>
              <input type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="">Endereço</label>
              <input type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="">Cidade</label>
              <input type="text" />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="">Número</label>
                <input type="text" />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="">Complemento (opcional)</label>
              <input type="text" />
            </S.InputGroup>
            <S.TagGroup>
              <Tag onClick={() => setPaymentStep('payment')}>
                Continuar com o pagamento
              </Tag>
              <Tag onClick={() => setPaymentStep('cart')}>
                Voltar para o carrinho
              </Tag>
            </S.TagGroup>
          </form>
        </S.PaymentContainer>
        <S.PaymentContainer
          className={paymentStep === 'payment' ? 'visible' : ''}
        >
          <form>
            <h3>Pagamento - Valor a pagar {priceAdjust(getTotalPrice())}</h3>
            <S.InputGroup>
              <label htmlFor="">Nome no cartão</label>
              <input type="text" />
            </S.InputGroup>
            <S.Row small>
              <S.InputGroup>
                <label htmlFor="">Número do cartão</label>
                <input type="text" />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <label htmlFor="">CVV</label>
                <input type="text" />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="">Mês de vencimento</label>
                <input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="">Ano de vencimento</label>
                <input type="text" />
              </S.InputGroup>
            </S.Row>
            <S.TagGroup>
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
            </S.TagGroup>
          </form>
        </S.PaymentContainer>
        <S.PaymentContainer
          className={paymentStep === 'finish' ? 'visible' : ''}
        >
          <h3>Pedido realizado - #PEDIDO</h3>
          <S.TextContainer>
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
          </S.TextContainer>
          <S.TagGroup>
            <Tag
              onClick={() => {
                setPaymentStep('cart')
                dispatch(closeCart())
              }}
            >
              Concluir
            </Tag>
          </S.TagGroup>
        </S.PaymentContainer>
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart
