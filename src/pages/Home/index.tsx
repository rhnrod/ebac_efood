import Hero from '../../components/Hero'
import MenuList from '../../containers/MenuList'

import Footer from '../../components/Footer'
import Cart from '../../containers/Cart'
import { useGetRestaurantsQuery } from '../../services/api'
import { Loading } from '../../containers/MenuList/styles'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <>
      <Hero />
      <MenuList restaurants={restaurants} />
      <Footer />
      <Cart />
    </>
  )
}

export default Home
