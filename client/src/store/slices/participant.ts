import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'participant',
  initialState: {
    id: null,
    name: null,
    surveyId: null,
    title: '',
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
    init: (state, action) => {
      state.surveyId = action.payload.surveyId;
    },
    changeName: (state, action) => {
      state.name = action.payload.name;
    },
    joinRequest: (state, action) => {},
    joinSuccess: (state, action) => {
      state.id = action.payload.id;
    },
    joinFailure: (state, action) => {},
  },
});

export const { init, changeName, joinRequest, joinSuccess, joinFailure } = slice.actions;

export default slice.reducer;
