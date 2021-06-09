import { all } from 'redux-saga/effects';
import userSaga from './user';
import surveySaga from './survey';

export default function* () {
  yield all([userSaga(), surveySaga()]);
}
