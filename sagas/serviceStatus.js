import { takeEvery } from 'redux-saga'
import {
  POLL_SERVICE_STATUS,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_ERROR
} from '../actions'

export function* watchPollServiceStatus() {
  yield takeEvery(POLL_SERVICE_STATUS, getServiceStatusFlow)
}

export function* getServiceStatusFlow() {
  //TODO
}