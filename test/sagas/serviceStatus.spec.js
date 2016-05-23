import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { assert } from 'chai'

import {
  POLL_SERVICE_STATUS,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_ERROR
} from '../../actions'
import { getServiceStatusAPI } from '../../API'
import {
  watchPollServiceStatus,
  getServiceStatusFlow
} from '../../sagas/serviceStatus'

describe('Sagas/ serviceStatus', () => {
  describe('watchPollServiceStatus', () => {
    const generator = watchPollServiceStatus()
    it('should take every polling request', () => {
        const expected = takeEvery(POLL_SERVICE_STATUS, getServiceStatusFlow)
        const actual = generator.next().value
        assert.equal(expected.name, actual.name)
    })
  })
})