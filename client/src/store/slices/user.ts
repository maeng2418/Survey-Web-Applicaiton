import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    username: null,
    email: null,
    token: null,
    error: '',
  },
  reducers: {
    loginRequest: (state, action) => {},
    loginSuccess: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    authRequest: (state, action) => {},
    authSuccess: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    authFailure: (state, action) => {
      state.username = null;
      state.email = null;
      state.token = null;
      state.error = action.payload;
    },
    logoutSuccess: (state, action) => {},
  },
});

export const {
  loginRequest,
  loginSuccess,
  logoutSuccess,
  loginFailure,
  authRequest,
  authSuccess,
  authFailure,
} = slice.actions;

export default slice.reducer;
