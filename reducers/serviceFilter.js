const serviceFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_SERVICE_FILTER':
      return action.filter
    default:
      return state
  }
}

export default serviceFilter