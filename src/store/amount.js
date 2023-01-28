import { createSlice } from "@reduxjs/toolkit"

const initialAmountState = { amount:0, items: [] }

const amountSlice = createSlice({
  name: 'amount',
  initialState: initialAmountState,
  reducers: {
    replaceCart(state, action) {
      state.amount = action.payload.amount
      state.items = action.payload.items
    },
    increment(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.amount++
      if (!existingItem) {
        state.items.push({ 
          id: newItem.id, 
          price: newItem.price, 
          quantity: 1, 
          totalPrice: newItem.price,
          name: newItem.title 
         })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    decrement(state, action) {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      state.amount--
      state.changed = true
      if (existingItem.quantity === 1) {
         state.items = state.items.filter(item => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    }
  }
})

export const amountActions = amountSlice.actions

export default amountSlice.reducer