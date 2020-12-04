import { createSlice } from '@reduxjs/toolkit';

export const rotate = createSlice({
  name: 'rotation',
  initialState: {
    value: false,
  },
  reducers: {
    stopRotation: (state) => {
      state.value = false;
    },
    startRotation: (state) => {
      state.value = true;
    },
  },
});

export const startRotationDelayed = () => (dispatch) => {
  setTimeout(() => {
    dispatch(rotate.actions.startRotation());
  }, 2000);
};

export const { stopRotation } = rotate.actions;

export const selectRotate = (state) => state.rotation.value;

export default rotate.reducer;
