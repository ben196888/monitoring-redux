import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import monitoringApp from '../reducers'
import rootSaga from '../sagas'

const saga = createSagaMiddleware()

const enhancer = applyMiddleware(thunk, saga)

export default function configureStore(initialState) {
  const store = createStore(monitoringApp, initialState, enhancer)

  saga.run(rootSaga)

  return store
}