let nextServerId = 0
export const addServer = (ip) => {
  return {
    type: 'ADD_SERVER',
    id: nextServerId++,
    ip
  }
}

export const setServiceFilter = (filter) => {
  return {
    type: 'SET_SERVICE_FILTER',
    filter
  }
}

export const toggleService = (serviceName) => {
  return {
    type: 'TOGGLE_SERVICE',
    serviceName
  }
}