const server = (state, action) => {
  switch (action.type) {
    case 'GET_SERVICES_STATUS':
      if (action.ip !== state.ip){
        return state
      }
      return Object.assign({}, state, {
        servicesStatus: action.servicesStatus
      })
    default:
      return state
  }
}

const servers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SERVER':
      return [
        ...state,
        {
          id: action.id,
          ip: action.ip,
          show: [],
          servicesStatus: {}
        }
      ]
    case 'GET_SERVICES_STATUS':
      return state.map(s =>
        server(s, action)
      )
    default:
      return state
  }
}

export default servers