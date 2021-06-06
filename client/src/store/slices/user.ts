import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    username: null,
    email: null,
    error: '',
  },
  reducers: {
    loginRequest: (state, action) => {},
    loginSuccess: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutSuccess: (state, action) => {},
  },
});

export const { loginRequest, loginSuccess, logoutSuccess, loginFailure } = slice.actions;

export default slice.reducer;
