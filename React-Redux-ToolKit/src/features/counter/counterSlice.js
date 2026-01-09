import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementBy10: (state) => {
      state.value += 10;
    },
    decrementBy10: (state) => {
      state.value -= 10;
    },
    incrementBy100: (state) => {
      state.value += 100;
    },
    decrementBy100: (state) => {
      state.value -= 100;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementBy10,
  incrementBy100,
  decrementBy10,
  decrementBy100,
} = counterSlice.actions;
export default counterSlice.reducer;
