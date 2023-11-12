import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeroPerfil from '../../components/HeroPerfil'
import Cart from '../../containers/Cart'
import ProductList from '../../containers/ProductList'
import { useGetProductsQuery } from '../../services/api'
import { Loading } from '../../containers/MenuList/styles'

const Perfil = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetProductsQuery(id!)

  if (!cardapio) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <>
      <HeroPerfil />
      <ProductList cardapio={cardapio} />
      <Footer />
      <Cart />
    </>
  )
}

export default Perfil
