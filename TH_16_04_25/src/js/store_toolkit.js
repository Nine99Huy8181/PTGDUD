
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../js/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;