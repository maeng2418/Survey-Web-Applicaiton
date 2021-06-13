import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    username: null,
    email: null,
    token: null,
    error: '',
    isLoading: true,
  },
  reducers: {
    loginRequest: (state, action) => {},
    loginSuccess: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    authRequest: (state, action) => {},
    authSuccess: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    authFailure: (state, action) => {
      state.id = null;
      state.username = null;
      state.email = null;
      state.token = null;
      state.error = action.payload;
    },
    onShowLoading: (state, action) => {
      state.isLoading = true;
    },
    onHideLoading: (state, action) => {
      state.isLoading = false;
    },
    logoutRequest: (state, action) => {},
    logoutSuccess: (state, action) => {
      state.id = null;
      state.username = null;
      state.email = null;
      state.token = null;
    },
    logoutFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  authRequest,
  authSuccess,
  authFailure,
  onShowLoading,
  onHideLoading,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} = slice.actions;

export default slice.reducer;
