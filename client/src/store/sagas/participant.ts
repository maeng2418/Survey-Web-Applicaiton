import { put, call, takeLatest, getContext } from 'redux-saga/effects';
import { joinRequest, joinSuccess, joinFailure } from '../slices/participant';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

// 설문지 저장
function joinSurveyAPI(surveyId: number, name: string) {
  return API.post(`/participant/join/${surveyId}`, { name: name });
}

function* joinSurvey(action: PayloadAction<{ surveyId: number; name: string }>): Generator {
  try {
    const response: any = yield call(joinSurveyAPI, action.payload.surveyId, action.payload.name);
    if (response.data.result.success) {
      yield put(joinSuccess({ id: response.data.result.participantId }));
      const history: any = yield getContext('history');
      history.push(`/survey/detail/${action.payload.surveyId}`);
    } else {
      yield put(joinFailure(response.data.message));
    }
  } catch (err) {
    yield put(joinFailure(err.message));
  }
}

export default function* userSaga() {
  yield takeLatest(joinRequest.type, joinSurvey);
}
