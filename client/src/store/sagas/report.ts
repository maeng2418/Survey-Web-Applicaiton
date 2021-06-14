import { put, call, takeEvery, select, takeLatest } from 'redux-saga/effects';
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
import { State } from 'store';
import { onShowSystemMsg } from 'store/slices/systemMsg';

// 리포트 데이터 로드
function loadReportAPI(surveyId: number, page: number) {
  return API.get(`/survey/report?id=${surveyId}&page=${page}`);
}

function* loadReport(): Generator {
  try {
    const reportData: any = yield select((state: State) => state.report);
    const response: any = yield call(loadReportAPI, reportData.surveyId, reportData.page);
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
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(loadReportFailure(err.message));
    yield put(onShowSystemMsg({ message: err.data.message }));
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
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(loadParticipantsFailure(err.message));
    yield put(onShowSystemMsg({ message: err.data.message }));
  }
}

export default function* reportSaga() {
  yield takeLatest(loadReportRequest.type, loadReport);
  yield takeEvery(loadParticipantsRequest.type, loadParticiapnt);
}
