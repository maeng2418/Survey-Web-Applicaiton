import { put, call, takeLatest, getContext, takeEvery } from 'redux-saga/effects';
import {
  loadDashbaordRequest,
  loadDashbaordSuccess,
  loadDashbaordFailure,
} from '../slices/dashboard';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

// 대시보드 데이터 로드
function loadDashboardAPI() {
  return API.get('/dashboard');
}

function* loadDashboard(action: PayloadAction<{ data: any }>): Generator {
  try {
    const response: any = yield call(loadDashboardAPI);
    if (response.data.result.success) {
      yield put(
        loadDashbaordSuccess({
          lastestSurvey: response.data.result.lastestSurvey,
          totalParticipants: response.data.result.totalParticipants,
          weeklyParticipantsList: response.data.result.weeklyParticipantsList,
        })
      );
    } else {
      yield put(loadDashbaordFailure(response.data.message));
    }
  } catch (err) {
    yield put(loadDashbaordFailure(err.message));
  }
}

export default function* userSaga() {
  yield takeEvery(loadDashbaordRequest.type, loadDashboard);
}
