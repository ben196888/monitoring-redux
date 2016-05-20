import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './stores/configureStore'
import App from './components/App'
import DevTools from './containers/DevTools'

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)

// if ( process.env.NOVE_ENV !== 'production' ) {
//   const showDevTools = require('./showDevTools')
//   showDevTools(store)
// }