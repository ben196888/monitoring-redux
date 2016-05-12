import { combineReducers } from 'redux'
import servers from './servers'
import serviceFilter from './serviceFilter'

const monitoringApp = combineReducers({
  servers,
  serviceFilter
})

export default monitoringApp