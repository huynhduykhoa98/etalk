/* eslint-disable linebreak-style */

/* eslint-disable spaced-comment */

// action, reducers
import { createSlice } from '@reduxjs/toolkit';

const list = createSlice({
  name: 'form',
  initialState: [],
  reducers: {
    addInfo: (state, action) => {
      state.push(action.payload); //clone new array => push
    },
  },
});

const { reducer, actions } = list;
export const { addInfo } = actions;
export default reducer;
