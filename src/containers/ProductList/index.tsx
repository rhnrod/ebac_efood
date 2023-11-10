import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/ProductCard'
import Tag from '../../components/Tag'

import { Modal as ModalStyle, ModalContainer, ModalDescription } from './styles'
import { ListContainer, ProductContainer } from './styles'
import { Loading } from '../MenuList/styles'

import { Restaurants } from '../MenuList'
import { getDescription } from '../../components/MenuCard'
import fechar from '../../assets/images/fechar.svg'

type Modal = {
  description: string
  name: string
  portions: string
  image: string
  price: string
}

const ProductList = () => {
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState<Modal>({
    description: '',
    name: '',
    portions: '',
    image: '',
    price: '0'
  })

  const [products, setProducts] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [id])

  if (!products) {
    return <Loading>Carregando...</Loading>
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const priceAdjust = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <ProductContainer>
        <ListContainer>
          {products.cardapio.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.foto}
              title={product.nome}
              description={getDescription(product.descricao, 150) as string}
              click={() => {
                setIsOpen(true)
                setModal({
                  description: `${product.descricao}`,
                  name: `${product.nome}`,
                  portions: `${product.porcao}`,
                  image: `${product.foto}`,
                  price: priceAdjust(Number(`${product.preco}`))
                })
              }}
            />
          ))}
        </ListContainer>
      </ProductContainer>
      <ModalStyle className={isOpen ? 'visible' : ''}>
        <ModalContainer className={isOpen ? 'visible' : ''}>
          <div>
            <img src={modal.image} alt="pizza marguerita" />
          </div>
          <ModalDescription>
            <h3>{modal.name}</h3>
            <img src={fechar} alt="botão fechar" onClick={closeModal} />
            <div>
              <p>{modal.description}</p>
              <p>Serve: {modal.portions}</p>
            </div>
            <Tag size="small">
              <p>Adicionar ao carrinho - {modal.price}</p>
            </Tag>
          </ModalDescription>
        </ModalContainer>
        <div className={isOpen ? 'overlay' : ''} onClick={closeModal}></div>
      </ModalStyle>
    </>
  )
}

export default ProductList
