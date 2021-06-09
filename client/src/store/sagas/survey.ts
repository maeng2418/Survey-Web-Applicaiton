import { put, call, takeLatest, getContext } from 'redux-saga/effects';
import { saveSurveyRequest, saveSurveySuccess, saveSurveyFailure } from '../slices/survey';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

// 설문지 저장
function saveSurveyAPI(data: any) {
  return API.post('/survey', data);
}

function* saveSurvey(action: PayloadAction<{ data: any }>): Generator {
  try {
    const response: any = yield call(saveSurveyAPI, action.payload);
    if (response.data.result.success) {
      yield put(saveSurveySuccess({}));
      const history: any = yield getContext('history');
      history.push('/dashboard');
    } else {
      yield put(saveSurveyFailure(response.data.message));
    }
  } catch (err) {
    yield put(saveSurveyFailure(err.message));
  }
}

export default function* userSaga() {
  yield takeLatest(saveSurveyRequest.type, saveSurvey);
}
