import { createSlice } from '@reduxjs/toolkit';

export const fontSize = createSlice({
  name: 'fontSize',
  initialState: {
    value: '1rem',
  },
  reducers: {
    changeFontSize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFontSize } = fontSize.actions;

export const selectFontSize = (state) => state.fontSize.value;

export default fontSize.reducer;
