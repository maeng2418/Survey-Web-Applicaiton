import { put, call, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  authRequest,
  authSuccess,
  authFailure,
} from '../slices/user';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

// 로그인
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

// 유저 인증
function authUserAPI() {
  return API.get('/users');
}

function* authUser(action: PayloadAction): Generator {
  try {
    const response: any = yield call(authUserAPI);
    if (response.data.result.success) {
      yield put(authSuccess(response.data.result));
    } else {
      yield put(authFailure(response.data.message));
    }
  } catch (err) {
    yield put(authFailure(err.message));
  }
}

export default function* userSaga() {
  yield takeLatest(loginRequest.type, loginUser);
  yield takeEvery(authRequest.type, authUser);
}
