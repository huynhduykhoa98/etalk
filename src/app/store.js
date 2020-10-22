/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';

import addInfoReducer from '../pages/SliceRedux';

const rootReducer = { form: addInfoReducer };
const store = configureStore({
  reducer: rootReducer,
});

export default store;
