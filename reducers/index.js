import { combineReducers } from 'redux'
import servers from './servers'
import services from './services'

const monitoringApp = combineReducers({
  servers,
  services
})

export default monitoringApp