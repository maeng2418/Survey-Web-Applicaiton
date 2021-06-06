import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFail } from '../slices/user';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

function loginUserAPI(data: { email: string; password: string }) {
  return API.post('/users', data);
}

function* loginUser(action: PayloadAction<{ email: string; password: string }>): Generator {
  try {
    // const result = yield call(loginUserAPI, action.payload);
    yield delay(1000);
    yield put(loginSuccess('user'));
  } catch (err) {
    yield put(loginFail(err.message));
  }
}

export default function* userSaga() {
  yield takeEvery(loginRequest.type, loginUser);
}
