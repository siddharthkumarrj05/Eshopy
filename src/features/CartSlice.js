import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart:[]
  }
  

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart: (state,actions) =>{
        state.cart.push(actions.payload)
    },

    DeleteCartItem:(state,actions)=>{
      state.cart = state.cart.filter((value)=> value.id !== actions.payload.id)
    }
  },
})

export const { AddToCart, DeleteCartItem } = CartSlice.actions

export default CartSlice.reducer