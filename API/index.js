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

const fetchAPI = (url, options = {}) => {
  return fetch(url, options)
         .then(checkStatus)
         .then(parseJSON)
}

export const getServiceStatusAPI = ({ip, name}) => {
  return fetchAPI(`http://${ip}:9899/monitorapi/${name}`)
}