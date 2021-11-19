import {configureStore} from '@reduxjs/toolkit';
// import counterSlice from './counterSlice';
import counterReducer from './counterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
