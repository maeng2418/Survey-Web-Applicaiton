import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'participant',
  initialState: {
    id: null,
    name: null,
    writer: null,
    surveyId: null,
    title: '',
    page: 0,
    questionList: [
      {
        idx: 0,
        question: '',
        position: 0,
        type: 'boolean',
        optionList: [],
      },
    ],
    error: '',
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload.name;
    },
    joinRequest: (state, action) => {},
    joinSuccess: (state, action) => {
      state.id = action.payload.id;
    },
    joinFailure: (state, action) => {
      state.error = action.payload;
    },
    loadSurveyInfoRequest: (state, action) => {},
    loadSurveyInfoSuccess: (state, action) => {
      state.surveyId = action.payload.surveyId;
      state.writer = action.payload.writer;
      state.title = action.payload.title;
    },
    loadSurveyInfoFailure: (state, action) => {
      state.error = action.payload;
    },
    loadSurveyDetailRequest: (state, action) => {},
    loadSurveyDetailSuccess: (state, action) => {
      state.questionList = action.payload.questionList;
    },
    loadSurveyDetailFailure: (state, action) => {
      state.error = action.payload;
    },
    submitSurveyRequest: (state, action) => {},
    submitSurveySuccess: (state, action) => {
      state.id = null;
      state.name = null;
      state.writer = null;
      state.surveyId = null;
      state.title = '';
      state.page = 0;
      state.questionList = [
        {
          idx: 0,
          question: '',
          position: 0,
          type: 'boolean',
          optionList: [],
        },
      ];
      state.error = '';
    },
    submitSurveyFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  changeName,
  joinRequest,
  joinSuccess,
  joinFailure,
  loadSurveyInfoRequest,
  loadSurveyInfoSuccess,
  loadSurveyInfoFailure,
  loadSurveyDetailRequest,
  loadSurveyDetailSuccess,
  loadSurveyDetailFailure,
  submitSurveyRequest,
  submitSurveySuccess,
  submitSurveyFailure,
} = slice.actions;

export default slice.reducer;
