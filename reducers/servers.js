const servers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SERVER':
      return [
        ...state,
        {
          id: action.id,
          ip: action.ip
        }
      ]
    default:
      return state
  }
}

export default servers