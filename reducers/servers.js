import {
  ADD_SERVER,
  POLL_SERVICE_STATUS,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_ERROR,
  GET_SERVICE_STATUS_CANCEL
} from '../actions'

const server = (state, action) => {
  if (action.ip !== state.ip) {
    return state
  }
  switch (action.type) {
    case POLL_SERVICE_STATUS:
      return Object.assign({}, state, {
        servicesStatus: Object.assign(state.servicesStatus, {
          status: 'connected',
          [action.id]: {
            status: 'fetching'
          }
        })
      })
    case GET_SERVICE_STATUS_SUCCESS:
      return Object.assign({}, state, {
        servicesStatus: Object.assign(state.servicesStatus, {
          [action.id]: {
            status: 'fetched',
            data: action.response.mesg
          }
        })
      })
    case GET_SERVICE_STATUS_ERROR:
      return Object.assign({}, state, {
        servicesStatus: Object.assign(state.servicesStatus, {
          [action.id]: {
            status: 'error',
            error: action.error
          }
        })
      })
    case GET_SERVICE_STATUS_CANCEL:
      return Object.assign({}, state, {
        servicesStatus: Object.assign(state.servicesStatus, {
          [action.id]: {
            status: 'init'
          }
        })
      })
    default:
      return state
  }
}

const servers = (state = [], action) => {
  switch (action.type) {
    case ADD_SERVER:
      return [
        ...state,
        {
          id: action.id,
          ip: action.ip,
          show: [],
          servicesStatus: {
            status: 'init'
          }
        }
      ]
    case POLL_SERVICE_STATUS:
    case GET_SERVICE_STATUS_SUCCESS:
    case GET_SERVICE_STATUS_ERROR:
    case GET_SERVICE_STATUS_CANCEL:
      return state.map(s =>
        server(s, action)
      )
    default:
      return state
  }
}

export default servers