import { put, call, takeLatest, getContext } from 'redux-saga/effects';
import { saveSurveyRequest, saveSurveySuccess, saveSurveyFailure } from '../slices/survey';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { onShowSystemMsg } from 'store/slices/systemMsg';

// 설문지 저장
function saveSurveyAPI(data: any) {
  return API.post('/survey', data);
}

function* saveSurvey(action: PayloadAction<{ data: any }>): Generator {
  try {
    const response: any = yield call(saveSurveyAPI, action.payload);
    if (response.data.result.success) {
      yield put(saveSurveySuccess());
      yield put(onShowSystemMsg({ message: '설문을 성공적으로 작성하였습니다.' }));
      const history: any = yield getContext('history');
      history.push('/dashboard');
    } else {
      yield put(saveSurveyFailure(response.data.message));
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(saveSurveyFailure(err.message));
    yield put(onShowSystemMsg({ message: err.data.message }));
  }
}

export default function* surveySaga() {
  yield takeLatest(saveSurveyRequest.type, saveSurvey);
}
