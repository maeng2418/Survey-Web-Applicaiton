import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'survey',
  initialState: {
    idCounter: 0,
    questionList: [
      {
        idx: 0,
        question: '',
        position: 0,
        type: 'boolean',
        optionList: [
          {
            adder: false,
            start: 'YES',
            value: '',
          },
          {
            adder: false,
            start: 'NO',
            value: '',
          },
        ],
      },
    ],
  },
  reducers: {
    addQuestion: (state, action) => {
      state.questionList = [
        ...state.questionList,
        {
          idx: state.idCounter + 1,
          question: '',
          position: 0,
          type: 'boolean',
          optionList: [
            {
              adder: false,
              start: 'YES',
              value: '',
            },
            {
              adder: false,
              start: 'NO',
              value: '',
            },
          ],
        },
      ];
      state.idCounter += 1;
    },
    deleteQuestion: (state, action) => {
      const copiedList = [...state.questionList];
      const result = copiedList.filter((question) => question.idx !== action.payload.idx);
      state.questionList = result;
    },
    changeQuestion: (state, action) => {
      const copiedList = [...state.questionList];
      state.questionList = copiedList.map((item) => {
        if (item.idx === action.payload.idx) {
          return { ...item, question: action.payload.question };
        }
        return item;
      });
    },
    changeType: (state, action) => {
      const copiedList = [...state.questionList];
      copiedList[action.payload.idx].type = action.payload.type;
      if (action.payload.type === 'boolean') {
        copiedList[action.payload.idx].optionList = [
          {
            adder: false,
            start: 'YES',
            value: '',
          },
          {
            adder: false,
            start: 'NO',
            value: '',
          },
        ];
      } else {
        copiedList[action.payload.idx].optionList = [
          {
            adder: true,
            start: '1',
            value: '',
          },
        ];
      }
      state.questionList = [...copiedList];
    },
    changePosition: (state, action) => {
      const copiedList = [...state.questionList];
      copiedList[action.payload.idx].position = action.payload.position;
      state.questionList = [...copiedList];
    },
    addOption: (state, action) => {
      const copiedQuestionList = [...state.questionList];
      const copiedOptionList = [...copiedQuestionList[action.payload.idx].optionList];

      const result = copiedOptionList.map((option, idx) => {
        return {
          adder: true,
          start: `${idx + 1}`,
          value: option.value,
        };
      });
      copiedQuestionList[action.payload.idx].optionList = [
        ...result,
        {
          adder: true,
          start: `${result.length + 1}`,
          value: '',
        },
      ];
      state.questionList = [...copiedQuestionList];
    },
    removeOption: (state, action) => {
      const copiedQuestionList = [...state.questionList];
      const copiedOptionList = [...copiedQuestionList[action.payload.idx].optionList];
      const result = copiedOptionList
        .filter((option) => option.start !== action.payload.start)
        .map((option, idx) => {
          return {
            adder: true,
            start: `${idx + 1}`,
            value: option.value,
          };
        });
      state.questionList[action.payload.idx].optionList = [...result];
    },
    changeOptionValue: (state, action) => {
      const copiedQuestionList = [...state.questionList];
      const copiedOptionList = [...copiedQuestionList[action.payload.idx].optionList];
      const result = copiedOptionList.map((option, idx) => {
        if (action.payload.start === option.start) {
          return {
            adder: option.adder,
            start: option.start,
            value: action.payload.value,
          };
        } else {
          return option;
        }
      });
      state.questionList[action.payload.idx].optionList = [...result];
    },

    // loginRequest: (state, action) => {},
    // loginSuccess: (state, action) => {
    //   state.username = action.payload.username;
    //   state.email = action.payload.email;
    //   state.token = action.payload.token;
    // },
    // loginFailure: (state, action) => {
    //   state.error = action.payload;
    // },
    // authRequest: (state, action) => {},
    // authSuccess: (state, action) => {
    //   state.username = action.payload.username;
    //   state.email = action.payload.email;
    //   state.token = action.payload.token;
    // },
    // authFailure: (state, action) => {
    //   state.username = null;
    //   state.email = null;
    //   state.token = null;
    //   state.error = action.payload;
    // },
    // onShowLoading: (state, action) => {
    //   state.isLoading = true;
    // },
    // onHideLoading: (state, action) => {
    //   state.isLoading = false;
    // },
    // logoutRequest: (state, action) => {},
    // logoutSuccess: (state, action) => {
    //   state.username = null;
    //   state.email = null;
    //   state.token = null;
    // },
    // logoutFailure: (state, action) => {
    //   state.error = action.payload;
    // },
  },
});

export const {
  addQuestion,
  deleteQuestion,
  changeQuestion,
  changePosition,
  changeType,
  addOption,
  removeOption,
  changeOptionValue,
  // loginRequest,
  // loginSuccess,
  // loginFailure,
  // authRequest,
  // authSuccess,
  // authFailure,
  // onShowLoading,
  // onHideLoading,
  // logoutRequest,
  // logoutSuccess,
  // logoutFailure,
} = slice.actions;

export default slice.reducer;
