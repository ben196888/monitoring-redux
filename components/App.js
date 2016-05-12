import React from 'react'
import AddServer from '../containers/AddServer'
import ServiceFilter from './ServiceFilter'
import ListServer from '../containers/ListServer'

const App = () => (
  <div>
    <AddServer />
    <ServiceFilter />
    <ListServer />
  </div>
)

export default App