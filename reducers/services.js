let defaultServices =  [
  {id: 1, name: 'HardwareInfo', shouldFetch: true},
  {id: 2, name: 'CpuStatus', shouldFetch: true},
  {id: 3, name: 'PowerStatus', shouldFetch: true},
  {id: 4, name: 'FanStatus', shouldFetch: true},
  {id: 5, name: 'MemoryStatus', shouldFetch: true},
  {id: 6, name: 'NicStatus', shouldFetch: true},
  {id: 7, name: 'DiskStatus', shouldFetch: true},
  {id: 8, name: 'ZfsStatus', shouldFetch: true},
  {id: 9, name: 'CephStatus', shouldFetch: true},
  {id: 10, name: 'VolPerformance', shouldFetch: true},
  {id: 11, name: 'VolumeStatus', shouldFetch: true},
  {id: 12, name: 'VersionInfo', shouldFetch: true},
  {id: 13, name: 'MdStatus', shouldFetch: true}
]

const service = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SERVICE':
      if( state.id !== action.id )
        return state
      return Object.assign({}, state, {
        shouldFetch: !state.shouldFetch
      })
    default:
      return state
  }
}

const services = (state = defaultServices, action) => {
  switch (action.type) {
    case 'TOGGLE_SERVICE':
      return state.map( s =>
        service(s, action)
      )
    default:
      return state
  }
}

export default services