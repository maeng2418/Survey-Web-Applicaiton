import { put, call, takeLatest, getContext, takeEvery } from 'redux-saga/effects';
import {
  loadDashboardRequest,
  loadDashboardSuccess,
  loadDashboardFailure,
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
        loadDashboardSuccess({
          lastestSurvey: response.data.result.lastestSurvey,
          totalParticipants: response.data.result.totalParticipants,
          weeklyParticipantsList: response.data.result.weeklyParticipantsList,
        })
      );
    } else {
      yield put(loadDashboardFailure(response.data.message));
    }
  } catch (err) {
    yield put(loadDashboardFailure(err.message));
  }
}

export default function* dashboardSaga() {
  yield takeEvery(loadDashboardRequest.type, loadDashboard);
}
