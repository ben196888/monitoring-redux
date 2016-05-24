import expect from 'expect'
import services from '../../reducers/services'
import { TOGGLE_SERVICE } from '../../actions'

describe('Reducers/ services', () => {
  it('should handle initial state', () => {
    // handle initial state
    expect(
      services(undefined, {})
    ).toEqual([
      {id: 1, name: "HardwareInfo", shouldFetch: true},
      {id: 2, name: "CpuStatus", shouldFetch: true},
      {id: 3, name: "PowerStatus", shouldFetch: true},
      {id: 4, name: "FanStatus", shouldFetch: true},
      {id: 5, name: "MemoryStatus", shouldFetch: true},
      {id: 6, name: "NicStatus", shouldFetch: true},
      {id: 7, name: "DiskStatus", shouldFetch: true},
      {id: 8, name: "ZfsStatus", shouldFetch: true},
      {id: 9, name: "CephStatus", shouldFetch: true},
      {id: 10, name: "VolPerformance", shouldFetch: true},
      {id: 11, name: "VolumeStatus", shouldFetch: true},
      {id: 12, name: "VersionInfo", shouldFetch: true},
      {id: 13, name: "MdStatus", shouldFetch: true}
    ])
  })
  it('should handle toggle service', () => {
    // handle toggle service (checked -> unchecked)
    expect(
      services([
        {id: 1, name: "HardwareInfo", shouldFetch: true},
        {id: 2, name: "CpuStatus", shouldFetch: true},
        {id: 3, name: "PowerStatus", shouldFetch: true},
        {id: 4, name: "FanStatus", shouldFetch: true},
        {id: 5, name: "MemoryStatus", shouldFetch: true},
        {id: 6, name: "NicStatus", shouldFetch: true},
        {id: 7, name: "DiskStatus", shouldFetch: true},
        {id: 8, name: "ZfsStatus", shouldFetch: true},
        {id: 9, name: "CephStatus", shouldFetch: true},
        {id: 10, name: "VolPerformance", shouldFetch: true},
        {id: 11, name: "VolumeStatus", shouldFetch: true},
        {id: 12, name: "VersionInfo", shouldFetch: true},
        {id: 13, name: "MdStatus", shouldFetch: true}
      ], {
        type: TOGGLE_SERVICE,
        id: 1
      })
    ).toEqual([
      {id: 1, name: "HardwareInfo", shouldFetch: false},
      {id: 2, name: "CpuStatus", shouldFetch: true},
      {id: 3, name: "PowerStatus", shouldFetch: true},
      {id: 4, name: "FanStatus", shouldFetch: true},
      {id: 5, name: "MemoryStatus", shouldFetch: true},
      {id: 6, name: "NicStatus", shouldFetch: true},
      {id: 7, name: "DiskStatus", shouldFetch: true},
      {id: 8, name: "ZfsStatus", shouldFetch: true},
      {id: 9, name: "CephStatus", shouldFetch: true},
      {id: 10, name: "VolPerformance", shouldFetch: true},
      {id: 11, name: "VolumeStatus", shouldFetch: true},
      {id: 12, name: "VersionInfo", shouldFetch: true},
      {id: 13, name: "MdStatus", shouldFetch: true}
    ])

    // handle toggle service (unchecked -> checked)
    expect(
      services([
        {id: 1, name: "HardwareInfo", shouldFetch: false},
        {id: 2, name: "CpuStatus", shouldFetch: true},
        {id: 3, name: "PowerStatus", shouldFetch: true},
        {id: 4, name: "FanStatus", shouldFetch: true},
        {id: 5, name: "MemoryStatus", shouldFetch: true},
        {id: 6, name: "NicStatus", shouldFetch: true},
        {id: 7, name: "DiskStatus", shouldFetch: true},
        {id: 8, name: "ZfsStatus", shouldFetch: true},
        {id: 9, name: "CephStatus", shouldFetch: true},
        {id: 10, name: "VolPerformance", shouldFetch: true},
        {id: 11, name: "VolumeStatus", shouldFetch: true},
        {id: 12, name: "VersionInfo", shouldFetch: true},
        {id: 13, name: "MdStatus", shouldFetch: true}
      ], {
        type: TOGGLE_SERVICE,
        id: 1
      })
    ).toEqual([
      {id: 1, name: "HardwareInfo", shouldFetch: true},
      {id: 2, name: "CpuStatus", shouldFetch: true},
      {id: 3, name: "PowerStatus", shouldFetch: true},
      {id: 4, name: "FanStatus", shouldFetch: true},
      {id: 5, name: "MemoryStatus", shouldFetch: true},
      {id: 6, name: "NicStatus", shouldFetch: true},
      {id: 7, name: "DiskStatus", shouldFetch: true},
      {id: 8, name: "ZfsStatus", shouldFetch: true},
      {id: 9, name: "CephStatus", shouldFetch: true},
      {id: 10, name: "VolPerformance", shouldFetch: true},
      {id: 11, name: "VolumeStatus", shouldFetch: true},
      {id: 12, name: "VersionInfo", shouldFetch: true},
      {id: 13, name: "MdStatus", shouldFetch: true}
    ])
  })
})