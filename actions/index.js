import { getServiceStatusAPI } from '../API'

export const ADD_SERVER = 'ADD_SERVER'
export const TOGGLE_SERVICE = 'TOGGLE_SERVICE'
export const POLL_SERVICE_STATUS = 'POLL_SERVICE_STATUS'
export const GET_SERVICE_STATUS_SUCCESS = 'GET_SERVICE_STATUS_SUCCESS'
export const GET_SERVICE_STATUS_ERROR = 'GET_SERVICE_STATUS_ERROR'
export const GET_SERVICE_STATUS_CANCEL = 'GET_SERVICE_STATUS_CANCEL'

let nextServerId = 0
export const addServer = (ip) => {
  return {
    type: ADD_SERVER,
    id: nextServerId++,
    ip
  }
}

export const toggleService = (id) => {
  return {
    type: TOGGLE_SERVICE,
    id
  }
}

export const pollServiceStatus = ({ip, id, name}) => {
  return {
    type: POLL_SERVICE_STATUS,
    ip,
    id,
    name
  }
}

export const getServiceStatusSuccess = ({ip, id, response}) => {
  return {
    type: GET_SERVICE_STATUS_SUCCESS,
    ip,
    id,
    response
  }
}

export const getServiceStatusError = ({ip, id, error}) => {
  return {
    type: GET_SERVICE_STATUS_ERROR,
    ip,
    id,
    error
  }
}

export const getServiceStatusCancel = ({ip, id}) => {
  return {
    type: GET_SERVICE_STATUS_CANCEL,
    ip,
    id
  }
}

// export const getStatus = (ip, s) => {

//   let obj = {}

//   fetch(`http://${ip}:9899/monitorapi/${s.name}`)
//   .then(checkStatus)
//   .then(parseJSON)
//   .then(data => {
//     Object.assign(obj, {
//       [s.id]: {
//         isFetching: false,
//         data
//       }
//     })
//   })
//   .catch(error => {
//     console.warn(error)
//     Object.assign(obj, {
//       [s.id]: {
//         isFetching: true,
//         data: 'N/A'
//       }
//     })
//   })
//   return obj
// }

// export const getServicesStatus = (ip, services) => {

//   console.log("ready to fetch")

//   let obj = {}

//   services.filter(s => s.shouldFetch)
//   .map(s => {
//     // Object.assign({}, obj, getStatus(ip, s))
//     fetch(`http://${ip}:9899/monitorapi/${s.name}`)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => {
//       Object.assign(obj, {
//         [s.id]: {
//           isFetching: false,
//           data
//         }
//       })
//     })
//     .catch(error => {
//       console.warn(error)
//       Object.assign(obj, {
//         [s.id]: {
//           isFetching: false,
//           data: `Cannot get ${s.name} status`
//         }
//       })
//     })
//   })
//   return {
//     type: 'GET_SERVICES_STATUS',
//     ip,
//     servicesStatus: obj
//   }
// }