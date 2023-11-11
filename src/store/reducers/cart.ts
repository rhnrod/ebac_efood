import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurants } from '../../containers/MenuList'

type CartState = {
  items: Restaurants[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurants>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
