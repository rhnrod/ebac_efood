import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../containers/MenuList'

type CartState = {
  items: Menu[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Menu>) => {
      if (state.items.find((item) => item.id === action.payload.id)) {
        alert('Este prato já foi adicionado ao carrinho.')
      } else {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, clear, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer
