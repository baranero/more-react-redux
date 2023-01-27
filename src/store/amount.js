import { createSlice } from "@reduxjs/toolkit"

const initialAmountState = { amount:0 }

const amountSlice = createSlice({
  name: 'amount',
  initialState: initialAmountState,
  reducers: {
    increment(state) {
      state.amount++
    },
    decrement(state) {
      state.amount--
    }
  }
})

export const amountActions = amountSlice.actions

export default amountSlice.reducer