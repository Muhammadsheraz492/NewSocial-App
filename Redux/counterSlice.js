import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    backgroundColor: '#fff',
    textColor: 'black',
    image: '',
  },
  reducers: {
    changeBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    ChangeTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    ImagefromFont: (state, action) => {
      state.image = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {ChangeTextColor, changeBackgroundColor, ImagefromFont} =
  counterSlice.actions;

export default counterSlice.reducer;
