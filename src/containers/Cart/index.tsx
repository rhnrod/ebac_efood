import { useDispatch, useSelector } from 'react-redux'
import remover from '../../assets/images/remover.svg'
import * as S from './styles'
import { RootReducer } from '../../store'
import { clear, closeCart, remove } from '../../store/reducers/cart'
import { priceAdjust } from '../../components/ProductCard'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [paymentStep, setPaymentStep] = useState('cart')

  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipcode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, 'min. 5').required('erro!'),
      address: Yup.string().min(5, 'min. 5').required('Obrigatório'),
      city: Yup.string().min(5, 'min. 5').required('Obrigatório'),
      zipcode: Yup.string()
        .min(9, 'min. 9')
        .max(9, 'max. 9')
        .required('Obrigatório'),
      number: Yup.string()
        .min(1, 'min. 1')
        .max(5, 'max. 5')
        .required('Obrigatório'),

      cardName: Yup.string().min(5, 'min. 5').required('Obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'min. 16')
        .max(19, 'max. 16')
        .required('Obrigatório'),
      cardCode: Yup.string()
        .min(3, 'min. 3')
        .max(3, 'max. 3')
        .required('Obrigatório'),
      month: Yup.string()
        .min(1, 'min. 1')
        .max(2, 'max. 2')
        .required('Obrigatório'),
      year: Yup.string()
        .min(4, 'min. 4')
        .max(4, 'max. 4')
        .required('Obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipcode,
            numberAddress: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

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

  const submitForm = () => {
    form.handleSubmit()
    setPaymentStep('finish')
  }

  const nameInput = document.getElementById('name') as HTMLInputElement
  const addressInput = document.getElementById('address') as HTMLInputElement
  const cityInput = document.getElementById('city') as HTMLInputElement
  const zipcodeInput = document.getElementById('zipcode') as HTMLInputElement
  const numberInput = document.getElementById('number') as HTMLInputElement
  const cardNameInput = document.getElementById('cardName') as HTMLInputElement
  const cardNumberInput = document.getElementById(
    'cardNumber'
  ) as HTMLInputElement
  const cardCodeInput = document.getElementById('cardCode') as HTMLInputElement
  const monthInput = document.getElementById('month') as HTMLInputElement
  const yearInput = document.getElementById('year') as HTMLInputElement

  const deliveryErrors = () => {
    if (
      nameInput.value === '' ||
      addressInput.value === '' ||
      cityInput.value === '' ||
      zipcodeInput.value === '' ||
      numberInput.value === '' ||
      checkInputError('name') ||
      checkInputError('address') ||
      checkInputError('city') ||
      checkInputError('zipcode') ||
      checkInputError('number')
    ) {
      return deliveryErrors
    } else {
      return setPaymentStep('payment')
    }
  }

  const paymentErrors = (
    el: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const expireMonth = Number(monthInput.value)
    const expireYear = Number(yearInput.value)
    const date = new Date()

    const thisMonth = date.getMonth()
    const thisYear = date.getFullYear()

    const invalidMonth = expireMonth > 13 || expireMonth < 1
    const invalidYear =
      expireYear < thisYear ||
      (expireYear === thisYear && expireMonth < thisMonth)

    if (
      cardNameInput.value === '' ||
      cardNumberInput.value === '' ||
      cardCodeInput.value === '' ||
      monthInput.value === '' ||
      yearInput.value === '' ||
      checkInputError('cardName') ||
      checkInputError('cardNumber') ||
      checkInputError('cardCode') ||
      checkInputError('month') ||
      checkInputError('year')
    ) {
      el.preventDefault()
      return paymentErrors
    } else if (invalidMonth) {
      el.preventDefault()
      return alert('Mês de expiração do cartão inválido!')
    } else if (invalidYear) {
      el.preventDefault()
      return alert('Ano de expiração do cartão inválido!')
    } else {
      submitForm()
      setPaymentStep('finish')
      form.handleReset(form.initialValues)
    }
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
                    <S.CartItem key={item.id}>
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
              <S.TagButton
                type="button"
                onClick={() => setPaymentStep('delivery')}
              >
                Continuar com a entrega
              </S.TagButton>
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

        <form
          onSubmit={() => {
            form.handleSubmit
          }}
        >
          <S.PaymentContainer
            className={paymentStep === 'delivery' ? 'visible' : ''}
          >
            <h3>Entrega</h3>
            <S.InputGroup>
              <label htmlFor="name">Quem irá receber</label>
              <small className={checkInputError('name') ? 'error' : ''}>
                {form.errors.name}
              </small>
              <input
                type="text"
                id="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <small className={checkInputError('address') ? 'error' : ''}>
                {form.errors.address}
              </small>
              <input
                type="text"
                id="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <small className={checkInputError('city') ? 'error' : ''}>
                {form.errors.city}
              </small>
              <input
                type="text"
                id="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="zipcode">CEP</label>
                <small className={checkInputError('zipcode') ? 'error' : ''}>
                  {form.errors.zipcode}
                </small>
                <InputMask
                  type="text"
                  id="zipcode"
                  value={form.values.zipcode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99999-999"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <small className={checkInputError('number') ? 'error' : ''}>
                  {form.errors.number}
                </small>
                <input
                  type="text"
                  id="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.TagGroup>
              <S.TagButton type="button" onClick={() => deliveryErrors()}>
                Continuar com o pagamento
              </S.TagButton>
              <S.TagButton type="button" onClick={() => setPaymentStep('cart')}>
                Voltar para o carrinho
              </S.TagButton>
            </S.TagGroup>
          </S.PaymentContainer>

          <S.PaymentContainer
            className={paymentStep === 'payment' ? 'visible' : ''}
          >
            <h3>Pagamento - Valor a pagar {priceAdjust(getTotalPrice())}</h3>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <small className={checkInputError('cardName') ? 'error' : ''}>
                {form.errors.cardName}
              </small>
              <input
                type="text"
                id="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.Row small>
              <S.InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <small className={checkInputError('cardNumber') ? 'error' : ''}>
                  {form.errors.cardNumber}
                </small>
                <InputMask
                  type="text"
                  id="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <label htmlFor="cardCode">CVV</label>
                <small className={checkInputError('cardCode') ? 'error' : ''}>
                  {form.errors.cardCode}
                </small>
                <InputMask
                  type="text"
                  id="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="month">Mês de vencimento</label>
                <small className={checkInputError('month') ? 'error' : ''}>
                  {form.errors.month}
                </small>
                <InputMask
                  type="text"
                  id="month"
                  value={form.values.month}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="year">Ano de vencimento</label>
                <small className={checkInputError('year') ? 'error' : ''}>
                  {form.errors.year}
                </small>
                <InputMask
                  type="text"
                  id="year"
                  value={form.values.year}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999"
                />
              </S.InputGroup>
            </S.Row>
            <S.TagGroup>
              <S.TagButton type="button" onClick={(el) => paymentErrors(el)}>
                Finalizar pagamento
              </S.TagButton>
              <S.TagButton
                type="button"
                onClick={() => setPaymentStep('delivery')}
              >
                Voltar para a edição de endereço
              </S.TagButton>
            </S.TagGroup>
          </S.PaymentContainer>
        </form>

        {data && (
          <S.PaymentContainer
            className={paymentStep === 'finish' ? 'visible' : ''}
          >
            <h3>Pedido realizado - {data.orderId}</h3>
            <S.TextContainer>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.TextContainer>
            <S.TagGroup>
              <S.TagButton
                type="button"
                onClick={() => {
                  setPaymentStep('cart')
                  dispatch(closeCart())
                }}
              >
                Concluir
              </S.TagButton>
            </S.TagGroup>
          </S.PaymentContainer>
        )}
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart
