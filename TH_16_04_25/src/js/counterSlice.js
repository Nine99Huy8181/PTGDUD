import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number1: 0,
    number2: 0,
    result: 0,
  },
  reducers: {
    setNumber1: (state, action) => {
      state.number1 = action.payload;
    },
    setNumber2: (state, action) => {
      state.number2 = action.payload;
    },
    increment: (state) => {
      state.result = parseInt(state.number1) + parseInt(state.number2);
    },
    decrement: (state) => {
      state.result = parseInt(state.number1) - parseInt(state.number2);
    },
  },
});

export const { setNumber1, setNumber2, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;