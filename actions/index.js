let nextServerId = 0
export const addServer = (ip) => {
  return {
    type: 'ADD_SERVER',
    id: nextServerId++,
    ip
  }
}

export const toggleService = (id) => {
  return {
    type: 'TOGGLE_SERVICE',
    id
  }
}

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res
  }
  else {
    let error = new Error(res.statusText)
    error.res = res
    throw error
  }
}

const parseJSON = (res) => {
  return res.json()
}

const parseTEXT = (res) => {
  return res.text()
}

const getStatus = (ip, s) => {

  let obj = {}

  fetch(`http://${ip}:9899/monitorapi/${s.name}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(data => {
    Object.assign(obj, {
      [s.id]: {
        isFetching: false,
        data
      }
    })
  })
  .catch(error => {
    console.warn(error)
    Object.assign(obj, {
      [s.id]: {
        isFetching: true,
        data: 'N/A'
      }
    })
  })
  return obj
}

export const getServicesStatus = (ip, services) => {

  let obj = {}

  services.filter(s => s.shouldFetch)
  .map(s => {
    // Object.assign({}, obj, getStatus(ip, s))
    fetch(`http://${ip}:9899/monitorapi/${s.name}`)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      Object.assign(obj, {
        [s.id]: {
          isFetching: false,
          data
        }
      })
    })
    .catch(error => {
      console.warn(error)
      Object.assign(obj, {
        [s.id]: {
          isFetching: false,
          data: `Cannot get ${s.name} status`
        }
      })
    })
  })
  return {
    type: 'GET_SERVICES_STATUS',
    ip,
    servicesStatus: obj
  }
}