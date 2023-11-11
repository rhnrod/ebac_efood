import pizza from '../../assets/images/pizza.png'
import remover from '../../assets/images/remover.svg'
import Tag from '../../components/Tag'
import { CartContainer, Sidebar, InfoContainer, Values } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <div className="overlay"></div>
      <Sidebar>
        <InfoContainer>
          <img src={pizza} alt="pizza marguerita" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>R$60,90</p>
          </div>
          <img src={remover} alt="botão remover" />
        </InfoContainer>
        <InfoContainer>
          <img src={pizza} alt="pizza marguerita" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>R$60,90</p>
          </div>
          <img src={remover} alt="botão remover" />
        </InfoContainer>
        <InfoContainer>
          <img src={pizza} alt="pizza marguerita" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>R$60,90</p>
          </div>
          <img src={remover} alt="botão remover" />
        </InfoContainer>
        <Values>
          <p>Valor total</p>
          <p>R$182,70</p>
        </Values>
        <Tag> Continuar com a entrega</Tag>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
