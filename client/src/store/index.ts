import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import { user } from './slices';

const reducer = combineReducers({
  // here we will be adding reducers
  user,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware], // 미들웨어를 정의해주도록 합니다.
  devTools: process.env.NODE_ENV !== 'production', // devTool 의 옵션을 선택합니다.
});

sagaMiddleware.run(saga);

export type State = ReturnType<typeof reducer>;
export default store;
