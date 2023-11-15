import Hero from '../../components/Hero'
import MenuList from '../../containers/MenuList'

import Footer from '../../components/Footer'
import Cart from '../../containers/Cart'
import { useGetRestaurantsQuery } from '../../services/api'
import { Loading } from '../../containers/MenuList/styles'
import { MoonLoader } from 'react-spinners'
import { cores } from '../../styles'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return (
      <Loading>
        <MoonLoader color={cores.primary} size={'60px'} />
      </Loading>
    )
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
