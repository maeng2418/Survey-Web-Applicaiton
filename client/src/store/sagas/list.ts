import { put, call, takeLatest, getContext, takeEvery } from 'redux-saga/effects';
import { loadListRequest, loadListSuccess, loadListFailure } from '../slices/list';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

// 리스트 데이터 로드
function loadListAPI(page: number) {
  return API.get(`survey/list/${page}`);
}

function* loadList(action: PayloadAction<number>): Generator {
  try {
    const response: any = yield call(loadListAPI, action.payload);
    if (response.data.result.success) {
      yield put(
        loadListSuccess({
          survey: response.data.result.surveyData,
        })
      );
    } else {
      yield put(loadListFailure(response.data.message));
    }
  } catch (err) {
    yield put(loadListFailure(err.message));
  }
}

export default function* listSaga() {
  yield takeEvery(loadListRequest.type, loadList);
}
