import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'survey',
  initialState: {
    surveyId: 0,
    title: '',
    questionList: [
      {
        questionId: 1,
        question: '질문',
        position: 0,
        optionList: [
          {
            optionId: 1,
            option: '옵션',
            selector: ['김명성'],
          },
        ],
      },
    ],
    totalParticipant: 0,
    error: '',
  },
  reducers: {
    loadReportRequest: (state, action) => {},
    loadReportSuccess: (state, action) => {
      state.surveyId = action.payload.surveyId;
      state.title = action.payload.title;
      state.questionList = action.payload.questionList;
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
