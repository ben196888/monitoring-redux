import React from 'react'
import AddServer from '../containers/AddServer'
import ServiceSelector from '../containers/ServiceSelector'
import ListServer from '../containers/ListServer'

const App = () => (
  <div>
    <AddServer />
    <ServiceSelector />
    <ListServer />
  </div>
)

export default App