import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'dashboard',
  initialState: {
    lastestSurvey: {
      '1': {
        title: '1번째 설문조사',
        count: 1,
      },
    },
    totalParticipants: 0,
    weeklyParticipantsList: [],
    error: '',
  },
  reducers: {
    loadDashbaordRequest: (state, action) => {},
    loadDashbaordSuccess: (state, action) => {
      state.lastestSurvey = action.payload.lastestSurvey;
      state.totalParticipants = action.payload.totalParticipants;
      state.weeklyParticipantsList = action.payload.weeklyParticipantsList;
    },
    loadDashbaordFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loadDashbaordRequest, loadDashbaordSuccess, loadDashbaordFailure } = slice.actions;

export default slice.reducer;
