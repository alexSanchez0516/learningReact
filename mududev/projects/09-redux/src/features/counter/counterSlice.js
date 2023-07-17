import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {

    // En los reducers realmente no esta mutando, usa una libreria llama
    // Immer, que detecta cambios en un estado de "borrador" y produce uno nueva
    increment: (state) => {
      // state.value += 1
      state.push(7)
    },
    decrement: (state) => {
      // state.value -= 1
      state.pop();
    },

    incrementByAmount: (state) => {
      state.value += action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer