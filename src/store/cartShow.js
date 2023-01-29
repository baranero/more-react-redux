import { createSlice } from "@reduxjs/toolkit"

const initialCartShowState = {
  isShown: false,
  notification: null
}

const cartShowSlice = createSlice({
  name: 'cartShow',
  initialState: initialCartShowState,
  reducers: {
    isEmpty(state) {
      state.isShown = !state.isShown
    },
    showNotification(state, action) {
      state.notification = { 
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})

export const cartShowActions = cartShowSlice.actions

export default cartShowSlice.reducer