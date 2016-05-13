import React from 'react'
import AddServer from '../containers/AddServer'
import ServiceFilter from './ServiceFilter'
import ServiceSelector from './ServiceSelector'
import ListServer from '../containers/ListServer'

const App = () => (
  <div>
    <AddServer />
    <ServiceFilter />
    <ServiceSelector />
    <ListServer />
  </div>
)

export default App