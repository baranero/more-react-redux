import { createSlice } from "@reduxjs/toolkit"

const initialCartShowState = {
  isShown: false
}

const cartShowSlice = createSlice({
  name: 'cartShow',
  initialState: initialCartShowState,
  reducers: {
    isEmpty(state) {
      state.isShown = false
    },
    isNotEmpty(state) {
      state.isShown = true
    }
  }
})

export const cartShowActions = cartShowSlice.actions

export default cartShowSlice.reducer