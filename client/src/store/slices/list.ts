import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'list',
  initialState: {
    page: 0,
    survey: {
      '1': {
        title: '1번째 설문조사',
        count: 1,
      },
    },
    error: '',
  },
  reducers: {
    loadListRequest: (state) => {},
    loadListSuccess: (state, action) => {
      if (Object.keys(action.payload.survey).length > 0) {
        state.page = state.page + 1;
      }
      state.survey = { ...action.payload.survey };
    },
    loadListFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loadListRequest, loadListSuccess, loadListFailure } = slice.actions;

export default slice.reducer;
