import { configureStore } from '@reduxjs/toolkit';
import backgroundColorReducer from '../reducers/backgroundColor';
import fontSizeReducer from '../reducers/fontSize';

export default configureStore({
  reducer: {
    backgroundColor: backgroundColorReducer,
    fontSize: fontSizeReducer,
  },
});
