import { createSlice } from '@reduxjs/toolkit';

export const backgroundColor = createSlice({
  name: 'backgroundColor',
  initialState: {
    value: '#fff',
  },
  reducers: {
    changeBackgroundColor: (state, action) => {
      state.value = action.payload ? action.payload : '#fff';
    },
  },
});

export const { changeBackgroundColor } = backgroundColor.actions;

export const selectBackgroundColor = (state) => state.backgroundColor.value;

export default backgroundColor.reducer;
