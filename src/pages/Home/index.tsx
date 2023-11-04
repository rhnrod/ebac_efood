import Hero from '../../components/Hero'
import MenuList from '../../containers/MenuList'
import Card from '../../models/Card'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'

const restaurantes: Card[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.9,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: massa,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 4.6,
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <Hero />
    <MenuList cards={restaurantes} />
  </>
)

export default Home
