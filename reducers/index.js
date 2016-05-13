import { combineReducers } from 'redux'
import servers from './servers'
import services from './services'
import serviceFilter from './serviceFilter'

const monitoringApp = combineReducers({
  servers,
  services,
  serviceFilter
})

export default monitoringApp