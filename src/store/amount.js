import { createSlice } from "@reduxjs/toolkit"
import { cartShowActions } from "./cartShow"

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

export const sendCardData = (cart) => {
  return async (dispatch) => {
    dispatch(cartShowActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!'
    }))

    const sendRequest = async () => {
      const response = await fetch('https://react-http-ff2de-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if (!response.ok) {
        throw new Error('Sending cart dara failed.')
      }
    }

    try {
      await sendRequest()
      
      dispatch(cartShowActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    } catch (error) {
      dispatch(cartShowActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    }


  

  }
}

export const amountActions = amountSlice.actions

export default amountSlice.reducer