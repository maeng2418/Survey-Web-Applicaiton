import { put, call, takeEvery } from 'redux-saga/effects';
import {
  loadReportRequest,
  loadReportSuccess,
  loadReportFailure,
  loadParticipantsRequest,
  loadParticipantsFailure,
  loadParticipantsSuccess,
} from '../slices/report';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

// 리포트 데이터 로드
function loadReportAPI(surveyId: number, page: number) {
  return API.get(`/survey/report?id=${surveyId}&page=${page}`);
}

function* loadReport(action: PayloadAction<{ surveyId: number; page: number }>): Generator {
  try {
    const response: any = yield call(loadReportAPI, action.payload.surveyId, action.payload.page);
    if (response.data.result.success) {
      yield put(
        loadReportSuccess({
          surveyId: response.data.result.surveyId,
          title: response.data.result.title,
          questionList: response.data.result.questionList,
        })
      );
    } else {
      yield put(loadReportFailure(response.data.message));
    }
  } catch (err) {
    yield put(loadReportFailure(err.message));
  }
}

// 설문참여자 데이터 로드
function loadParticipantAPI(surveyId: number) {
  return API.get(`/survey/participant?id=${surveyId}`);
}

function* loadParticiapnt(action: PayloadAction<{ surveyId: number }>): Generator {
  try {
    const response: any = yield call(loadParticipantAPI, action.payload.surveyId);
    if (response.data.result.success) {
      yield put(
        loadParticipantsSuccess({
          totalParticipant: response.data.result.totalParticipant,
        })
      );
    } else {
      yield put(loadParticipantsFailure(response.data.message));
    }
  } catch (err) {
    yield put(loadParticipantsFailure(err.message));
  }
}

export default function* reportSaga() {
  yield takeEvery(loadReportRequest.type, loadReport);
  yield takeEvery(loadParticipantsRequest.type, loadParticiapnt);
}
