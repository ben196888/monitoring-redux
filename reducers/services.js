let defaultServices = { "HardwareInfo": true,
                        "CpuStatus": true,
                        "PowerStatus": true,
                        "FanStatus": true,
                        "MemoryStatus": true,
                        "NicStatus": true,
                        "DiskStatus": true,
                        "ZfsStatus": true,
                        "CephStatus": true,
                        "VolPerformance": true,
                        "VolumeStatus": true,
                        "VersionInfo": true,
                        "MdStatus": true}

const services = (state = defaultServices, action) => {
  switch (action.type) {
    case 'TOGGLE_SERVICE':
      console.log(state);
      return Object.assign({}, state, {
          [action.serviceName]: !(state[action.serviceName])
      })
      // if (state[serviceName])
      // {
      //   return Object.assign({}, state, {
      //     String(action.serviceName): false
      //     [action.serviceName]: false
      //   })
      // }
      // else
      // {
      //   return Object.assign({}, state, {
      //     [action.serviceName]: true
      //   })
      // }
    default:
      return state
  }
}
