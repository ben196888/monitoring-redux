let defaultServices =  [{id: 1, name: "HardwareInfo", status: true},
                        {id: 2, name: "CpuStatus", status: true},
                        {id: 3, name: "PowerStatus", status: true},
                        {id: 4, name: "FanStatus", status: true},
                        {id: 5, name: "MemoryStatus", status: true},
                        {id: 6, name: "NicStatus", status: true},
                        {id: 7, name: "DiskStatus", status: true},
                        {id: 8, name: "ZfsStatus", status: true},
                        {id: 9, name: "CephStatus", status: true},
                        {id: 10, name: "VolPerformance", status: true},
                        {id: 11, name: "VolumeStatus", status: true},
                        {id: 12, name: "VersionInfo", status: true},
                        {id: 13, name: "MdStatus", status: true}]

const service = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SERVICE':
      if( state.id !== action.id )
        return state
      return Object.assign({}, state, {
        status: !state.status
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