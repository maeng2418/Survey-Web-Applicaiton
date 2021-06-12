import { put, call, takeLatest, getContext, takeEvery } from 'redux-saga/effects';
import {
  joinRequest,
  joinSuccess,
  joinFailure,
  loadSurveyInfoSuccess,
  loadSurveyInfoFailure,
  loadSurveyInfoRequest,
} from '../slices/participant';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

// 설문 참여
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

// 설문 정보
function loadSurveyInfoAPI(surveyId: number) {
  return API.get(`/survey/info/${surveyId}`);
}

function* loadSurveyInfo(action: PayloadAction<{ surveyId: number }>): Generator {
  try {
    const response: any = yield call(loadSurveyInfoAPI, action.payload.surveyId);
    if (response.data.result.success) {
      yield put(
        loadSurveyInfoSuccess({
          surveyId: response.data.result.info.surveyId,
          writer: response.data.result.info.writer,
          title: response.data.result.info.title,
        })
      );
    } else {
      yield put(loadSurveyInfoFailure(response.data.message));
    }
  } catch (err) {
    yield put(loadSurveyInfoFailure(err.message));
  }
}

export default function* userSaga() {
  yield takeLatest(joinRequest.type, joinSurvey);
  yield takeEvery(loadSurveyInfoRequest.type, loadSurveyInfo);
}
