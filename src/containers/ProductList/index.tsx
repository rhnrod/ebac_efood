import { useState } from 'react'

import ProductCard from '../../components/ProductCard'
import Tag from '../../components/Tag'

import { Modal as ModalStyle, ModalContainer, ModalDescription } from './styles'
import { ListContainer, ProductContainer } from './styles'

import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/fechar.svg'

const products = [
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState(pizza)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ProductContainer>
        <ListContainer>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              click={() => {
                setIsOpen(true)
                setModalUrl(product.image)
              }}
            />
          ))}
        </ListContainer>
      </ProductContainer>
      <ModalStyle className={isOpen ? 'visible' : ''}>
        <ModalContainer className={isOpen ? 'visible' : ''}>
          <div>
            <img src={modalUrl} alt="pizza marguerita" />
          </div>
          <ModalDescription>
            <h3>Pizza Marguerita</h3>
            <img src={fechar} alt="botão fechar" onClick={closeModal} />
            <div>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <p>Serve: de 2 a 3 pessoas</p>
            </div>
            <Tag size="small">Adicionar ao carrinho - R$60,90</Tag>
          </ModalDescription>
        </ModalContainer>
        <div className={isOpen ? 'overlay' : ''} onClick={closeModal}></div>
      </ModalStyle>
    </>
  )
}

export default ProductList
