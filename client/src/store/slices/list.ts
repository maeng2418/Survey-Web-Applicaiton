import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'list',
  initialState: {
    page: 0,
    load: false,
    survey: {},
    error: '',
  },
  reducers: {
    loadListRequest: (state) => {
      state.load = true;
    },
    loadListSuccess: (state, action) => {
      if (Object.keys(action.payload.survey).length > 0) {
        state.load = false;
        state.page = state.page + 1;
      }
      state.survey = { ...state.survey, ...action.payload.survey };
    },
    loadListFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loadListRequest, loadListSuccess, loadListFailure } = slice.actions;

export default slice.reducer;
