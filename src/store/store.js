import { configureStore } from '@reduxjs/toolkit';
import backgroundColorReducer from '../reducers/backgroundColor';
import fontSizeReducer from '../reducers/fontSize';
import rotateReducer from '../reducers/rotate';

export default configureStore({
  reducer: {
    backgroundColor: backgroundColorReducer,
    fontSize: fontSizeReducer,
    rotation: rotateReducer,
  },
});
