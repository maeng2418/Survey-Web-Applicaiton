import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'systemMsg',
  initialState: {
    visible: false,
    message: '',
  },
  reducers: {
    onShowSystemMsg: (state, action) => {
      state.message = action.payload.message;
      state.visible = true;
    },
    onHideSystemMsg: (state) => {
      state.visible = false;
      state.message = '';
    },
  },
});

export const { onShowSystemMsg, onHideSystemMsg } = slice.actions;

export default slice.reducer;
