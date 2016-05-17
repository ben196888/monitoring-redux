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

export const getServicesStatus = (ip, services) => {

  let obj = {
    isFetching: false
  }

  services.map(s => {
    fetch(`http://${ip}:9899/monitorapi/${s.name}`)
    .then(checkStatus)
    .then(parseTEXT)
    .then(data => {
      console.log(data)
      Object.assign(obj, {
        [s.id]: data
      })
    })
    .catch(error => {
      console.log('request failed', error)
      console.warn(error)
    })
  })
  return {
    type: 'GET_SERVICES_STATUS',
    servicesStatus: Object.assign({}, obj)
  }
}