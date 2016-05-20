import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import monitoringApp from '../reducers'
import rootSaga from '../sagas'
import DevTools from '../containers/DevTools'

const saga = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(thunk, saga),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0)? matches[1] : null
}

export default function configureStore(initialState) {
  const store = createStore(monitoringApp, initialState, enhancer)

  saga.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}