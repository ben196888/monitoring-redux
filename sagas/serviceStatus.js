import { takeEvery } from 'redux-saga'
import { call, put, fork, take, cancel } from 'redux-saga/effects'

import {
  POLL_SERVICE_STATUS,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_ERROR,
  GET_SERVICE_STATUS_CANCEL
} from '../actions'
import { getServiceStatusAPI } from '../API'

export function* watchPollServiceStatus() {
  yield takeEvery(POLL_SERVICE_STATUS, getServiceStatusFlow)
}

export function* getStatus({ip, id, name}) {
  try {
    const response = yield call(getServiceStatusAPI, {
      ip,
      name
    })
    yield put({
      type: GET_SERVICE_STATUS_SUCCESS,
      ip,
      id,
      response
    })
  }
  catch (error) {
    yield put({
      type: GET_SERVICE_STATUS_ERROR,
      ip,
      id,
      error
    })
  }
}

export function* getServiceStatusFlow(action) {
  const task = yield fork(getStatus, {
    ip: action.ip,
    id: action.id,
    name: action.name
  })
  yield take(GET_SERVICE_STATUS_CANCEL)
  yield cancel(task)
}