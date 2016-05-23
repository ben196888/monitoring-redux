import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {
  POLL_SERVICE_STATUS,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_ERROR
} from '../actions'
import { getServiceStatusAPI } from '../API'

export function* watchPollServiceStatus() {
  yield takeEvery(POLL_SERVICE_STATUS, getServiceStatusFlow)
}

export function* getServiceStatusFlow(action) {
  try {
    const response = yield call(getServiceStatusAPI, {
      ip: action.ip,
      serviceName: action.serviceName
    })
    yield put({
      type: GET_SERVICE_STATUS_SUCCESS,
      response
    })
  }
  catch (error) {
    yield put({
      type: GET_SERVICE_STATUS_ERROR,
      error
    })
  }
}