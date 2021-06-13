import { all } from 'redux-saga/effects';
import userSaga from './user';
import surveySaga from './survey';
import participantSaga from './participant';

export default function* () {
  yield all([userSaga(), surveySaga(), participantSaga()]);
}
