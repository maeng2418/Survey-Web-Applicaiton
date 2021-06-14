import { put, call, takeLatest, getContext, takeEvery, select } from 'redux-saga/effects';
import {
  joinRequest,
  joinSuccess,
  joinFailure,
  loadSurveyInfoSuccess,
  loadSurveyInfoFailure,
  loadSurveyInfoRequest,
  loadSurveyDetailRequest,
  loadSurveyDetailSuccess,
  loadSurveyDetailFailure,
  submitSurveyRequest,
  submitSurveySuccess,
  submitSurveyFailure,
} from '../slices/participant';
import API from 'utils/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { State } from 'store';
import { onShowSystemMsg } from 'store/slices/systemMsg';

// 설문 참여
function joinSurveyAPI(surveyId: number, name: string) {
  return API.post(`/participant/join/${surveyId}`, { name: name });
}

function* joinSurvey(action: PayloadAction<{ surveyId: number; name: string }>): Generator {
  try {
    const response: any = yield call(joinSurveyAPI, action.payload.surveyId, action.payload.name);
    if (response.data.result.success) {
      yield put(joinSuccess({ id: response.data.result.participantId }));
      yield put(loadSurveyDetailRequest());
      const history: any = yield getContext('history');
      history.push(`/survey/${action.payload.surveyId}`);
    } else {
      yield put(joinFailure(response.data.message));
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(joinFailure(err.message));
    yield put(onShowSystemMsg({ message: err.message }));
  }
}

// 설문 정보
function loadSurveyInfoAPI(surveyId: number) {
  return API.get(`/survey/info/${surveyId}`);
}

function* loadSurveyInfo(action: PayloadAction<{ surveyId: number }>): Generator {
  try {
    const response: any = yield call(loadSurveyInfoAPI, action.payload.surveyId);
    if (response.data.result.success) {
      yield put(
        loadSurveyInfoSuccess({
          surveyId: response.data.result.info.surveyId,
          writer: response.data.result.info.writer,
          title: response.data.result.info.title,
        })
      );
    } else {
      yield put(loadSurveyInfoFailure(response.data.message));
      yield put(onShowSystemMsg({ message: response.data.message }));
    }
  } catch (err) {
    yield put(loadSurveyInfoFailure(err.message));
    yield put(onShowSystemMsg({ message: err.data.message }));
  }
}

// 설문 상세
function loadSurveyDetailAPI(surveyId: number, pageCount: number) {
  return API.get(`/survey/detail?id=${surveyId}&page=${pageCount}`);
}

function* loadSurveyDetail(): Generator {
  try {
    const participantData: any = yield select((state: State) => state.participant);
    const response: any = yield call(
      loadSurveyDetailAPI,
      participantData.surveyId,
      participantData.page
    );
    if (response.data.result.success) {
      yield put(
        loadSurveyDetailSuccess({
          questionList: Object.values(response.data.result.questionList),
        })
      );
    } else {
      yield put(loadSurveyDetailFailure(response.data.message));
    }
  } catch (err) {
    yield put(loadSurveyDetailFailure(err.message));
  }
}

// 설문 응답 제출
function submitSurveyAPI(data: { participantId: number; optionList: string[] }) {
  return API.post(`/participant`, data);
}

function* submitSurvey(
  action: PayloadAction<{ participantId: number; options: { [id: string]: string[] } }>
): Generator {
  try {
    const optionList = [];
    for (const key in action.payload.options) {
      optionList.push(...action.payload.options[key]);
    }
    const response: any = yield call(submitSurveyAPI, {
      participantId: action.payload.participantId,
      optionList: optionList,
    });
    if (response.data.result.success) {
      yield put(submitSurveySuccess({}));
      yield put(onShowSystemMsg({ message: '응답을 제출하였습니다.' }));
      const history: any = yield getContext('history');
      history.go(-1);
    } else {
      yield put(submitSurveyFailure(response.data.message));
    }
  } catch (err) {
    yield put(submitSurveyFailure(err.message));
  }
}

export default function* participantSaga() {
  yield takeLatest(joinRequest.type, joinSurvey);
  yield takeEvery(loadSurveyInfoRequest.type, loadSurveyInfo);
  yield takeLatest(loadSurveyDetailRequest.type, loadSurveyDetail);
  yield takeLatest(submitSurveyRequest.type, submitSurvey);
}
