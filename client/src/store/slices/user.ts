import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    error: '',
  },
  reducers: {
    loginRequest: (state, action) => {},
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    loginFail: (state, action) => {},
    logoutSuccess: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, logoutSuccess, loginFail } = slice.actions;

export default slice.reducer;
