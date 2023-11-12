import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Menu, Restaurants } from '../containers/MenuList'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getProducts: builder.query<Menu[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: Restaurants) => {
        return response.cardapio
      }
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useGetProductsQuery
} = api
export default api
