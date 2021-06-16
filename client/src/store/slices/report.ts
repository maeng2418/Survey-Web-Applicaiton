import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'survey',
  initialState: {
    surveyId: 0,
    title: '',
    page: 0,
    load: false,
    questionList: [],
    totalParticipant: 0,
    error: '',
  },
  reducers: {
    loadReportRequest: (state, action) => {
      state.load = true;
      state.surveyId = action.payload.surveyId;
    },
    loadReportSuccess: (state: any, action) => {
      state.title = action.payload.title;
      state.questionList = [...state.questionList, ...action.payload.questionList];
      if (action.payload.questionList.length > 0) {
        state.page = state.page + 1;
        state.load = false;
      }
    },
    loadReportFailure: (state, action) => {
      state.error = action.payload;
    },
    loadParticipantsRequest: (state, action) => {},
    loadParticipantsSuccess: (state, action) => {
      state.totalParticipant = action.payload.totalParticipant;
    },
    loadParticipantsFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  loadReportRequest,
  loadReportSuccess,
  loadReportFailure,
  loadParticipantsRequest,
  loadParticipantsSuccess,
  loadParticipantsFailure,
} = slice.actions;

export default slice.reducer;
