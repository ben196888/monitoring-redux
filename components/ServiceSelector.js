import React from 'react'
import CheckService from '../containers/CheckService'

const ServiceSelector = () => (
  <p>
    Select:
    {" "}
    <CheckService serviceName="HardwareInfo">
      HardwareInfo
    </CheckService>
    {" "}
    <CheckService serviceName="CpuStatus">
      CpuStatus
    </CheckService>
    {" "}
    <CheckService serviceName="PowerStatus">
      PowerStatus
    </CheckService>
    {" "}
    <CheckService serviceName="FanStatus">
      FanStatus
    </CheckService>
    {" "}
    <CheckService serviceName="MemoryStatus">
      MemoryStatus
    </CheckService>
    {" "}
    <CheckService serviceName="NicStatus">
      NicStatus
    </CheckService>
    {" "}
    <CheckService serviceName="DiskStatus">
      DiskStatus
    </CheckService>
    {" "}
    <CheckService serviceName="ZfsStatus">
      ZfsStatus
    </CheckService>
    {" "}
    <CheckService serviceName="CephStatus">
      CephStatus
    </CheckService>
    {" "}
    <CheckService serviceName="VolPerformance">
      VolPerformance
    </CheckService>
    {" "}
    <CheckService serviceName="VolumeStatus">
      VolumeStatus
    </CheckService>
    {" "}
    <CheckService serviceName="VersionInfo">
      VersionInfo
    </CheckService>
    {" "}
    <CheckService serviceName="MdStatus">
      MdStatus
    </CheckService>
  </p>
)

export default ServiceSelector