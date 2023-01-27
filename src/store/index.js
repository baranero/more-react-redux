import { configureStore } from "@reduxjs/toolkit";
import amountReducer from './amount'
import cartShowReducer from './cartShow'



const store = configureStore({
  reducer: {
    amount: amountReducer,
    cartShow: cartShowReducer
  }
})

export default store