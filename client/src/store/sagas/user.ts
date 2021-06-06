import { put, call, delay, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../slices/user';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

function loginUserAPI(data: { email: string; password: string }) {
  return API.post('/users', data);
}

function* loginUser(action: PayloadAction<{ email: string; password: string }>): Generator {
  try {
    const response: any = yield call(loginUserAPI, action.payload);
    yield delay(1000);
    if (response.data.result.success) {
      yield put(loginSuccess(response.data.result));
    } else {
      yield put(loginFailure(response.data.message));
    }
  } catch (err) {
    yield put(loginFailure(err.message));
  }
}

export default function* userSaga() {
  yield takeLatest(loginRequest.type, loginUser);
}
