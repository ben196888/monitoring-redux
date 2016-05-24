import 'babel-polyfill'
import { takeEvery } from 'redux-saga'
import { createMockTask } from 'redux-saga/utils'
import { call, put, fork, take, cancel } from 'redux-saga/effects'
import { assert } from 'chai'

import {
  POLL_SERVICE_STATUS,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_ERROR,
  GET_SERVICE_STATUS_CANCEL
} from '../../actions'
import { getServiceStatusAPI } from '../../API'
import {
  watchPollServiceStatus,
  getStatus,
  getServiceStatusFlow
} from '../../sagas/serviceStatus'

describe('Sagas/ serviceStatus', () => {
  describe('watchPollServiceStatus', () => {
    const iterator = watchPollServiceStatus()
    it('should take every polling request', () => {
        const expected = takeEvery(POLL_SERVICE_STATUS, getServiceStatusFlow)
        const actual = iterator.next().value
        assert.equal(expected.name, actual.name)
    })
  })
  describe('getServiceStatusFlow', () => {
    // prepare flow and mock task
    const iterator = getServiceStatusFlow({
      type: POLL_SERVICE_STATUS,
      ip: '10.10.99.90',
      id: 1,
      name: 'HardwareInfo'
    })
    const task = createMockTask()

    it('should fork a get status task', () => {
      const expected = fork(getStatus, {
        ip: '10.10.99.90',
        id: 1,
        name: 'HardwareInfo'
      })
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)
    })

    it('should take cancel get status action', () => {
      const expected = take(GET_SERVICE_STATUS_CANCEL)
      const actual = iterator.next(task).value
      assert.deepEqual(expected, actual)
    })

    it('should cancel get status task', () => {
      const expected = cancel(task)
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)
    })
  })

  describe('Get Status', () => {
    // prepare mock
    const iterator = getStatus({
      ip: '10.10.99.91',
      id: 1,
      name: 'HardwareInfo'
    })

    it('should call fetchAPI', () => {
      const expected = call(getServiceStatusAPI, {
        ip: '10.10.99.91',
        name: 'HardwareInfo'
      })
      const actual = iterator.next().value
      assert.deepEqual(expected, actual)
    })

    it('should handle get service status success', () => {
      // prepare response
      const getResponse = () => ({
        "hostname": "hopebay-00-02",
        "mesg": {
          "cpu": "Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.10GHz",
          "fan": [
            {
              "fan_id": "Fan_1"
            },
            {
              "fan_id": "Fan_2"
            },
            {
              "fan_id": "Fan_3"
            },
            {
              "fan_id": "Fan_4"
            }
          ],
          "hdd": [
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "10",
              "sn": "Z1P4S1ZH",
              "vendor": "Seagate",
              "vslot": "8",
              "wwn": "5000c5004f785b75"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "11",
              "sn": "Z1P4918P",
              "vendor": "Seagate",
              "vslot": "4",
              "wwn": "5000c5004ee6b3b2"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "8",
              "sn": "Z1P4836A",
              "vendor": "Seagate",
              "vslot": "3",
              "wwn": "5000c5004ee864ca"
            },
            {
              "capacity": "400 GB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "G2010110",
              "model": "INTEL SSDSC2BX40",
              "slot": "9",
              "sn": "BTHC535104YS400VGN",
              "vendor": "ATA",
              "vslot": "12",
              "wwn": "55cd2e404c0c3bc1"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "5",
              "sn": "Z1P4RNZ3",
              "vendor": "Seagate",
              "vslot": "2",
              "wwn": "5000c5004f784640"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "7",
              "sn": "Z1P4RLS4",
              "vendor": "Seagate",
              "vslot": "7",
              "wwn": "5000c5004f79a1d6"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "3",
              "sn": "Z1P48RL3",
              "vendor": "Seagate",
              "vslot": "10",
              "wwn": "5000c5004ee8e9ab"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "4",
              "sn": "Z1P48VEG",
              "vendor": "Seagate",
              "vslot": "6",
              "wwn": "5000c5004ee71a3c"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "0",
              "sn": "Z1P48433",
              "vendor": "Seagate",
              "vslot": "9",
              "wwn": "5000c5004eede9ae"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "1",
              "sn": "Z1P4RPBM",
              "vendor": "Seagate",
              "vslot": "5",
              "wwn": "5000c5004f78686d"
            },
            {
              "capacity": "2.0 TB",
              "disk_type": "SATA",
              "exist_flag": "True",
              "fw": "SN03",
              "model": "ST2000NM0011",
              "slot": "2",
              "sn": "Z1P48V7S",
              "vendor": "Seagate",
              "vslot": "1",
              "wwn": "5000c5004ee692b7"
            }
          ],
          "nic": [
            {
              "ipaddr": "169.254.128.3",
              "mac": "e4:1d:2d:71:15:f1",
              "nic_id": "eth2",
              "type": "internal"
            },
            {
              "ipaddr": "10.10.99.91",
              "mac": "e4:1d:2d:71:15:f2",
              "nic_id": "eth3",
              "type": "external"
            }
          ],
          "psu": [
            {
              "ps_id": "PSU0"
            },
            {
              "ps_id": "PSU1"
            }
          ],
          "ram": 31.39,
          "status": "alive"
        },
        "module_name": "hardware_info"
      })

      const expected = put({
        type: GET_SERVICE_STATUS_SUCCESS,
        ip: '10.10.99.91',
        id: 1,
        response: {
          "hostname": "hopebay-00-02",
          "mesg": {
            "cpu": "Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.10GHz",
            "fan": [
              {
                "fan_id": "Fan_1"
              },
              {
                "fan_id": "Fan_2"
              },
              {
                "fan_id": "Fan_3"
              },
              {
                "fan_id": "Fan_4"
              }
            ],
            "hdd": [
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "10",
                "sn": "Z1P4S1ZH",
                "vendor": "Seagate",
                "vslot": "8",
                "wwn": "5000c5004f785b75"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "11",
                "sn": "Z1P4918P",
                "vendor": "Seagate",
                "vslot": "4",
                "wwn": "5000c5004ee6b3b2"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "8",
                "sn": "Z1P4836A",
                "vendor": "Seagate",
                "vslot": "3",
                "wwn": "5000c5004ee864ca"
              },
              {
                "capacity": "400 GB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "G2010110",
                "model": "INTEL SSDSC2BX40",
                "slot": "9",
                "sn": "BTHC535104YS400VGN",
                "vendor": "ATA",
                "vslot": "12",
                "wwn": "55cd2e404c0c3bc1"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "5",
                "sn": "Z1P4RNZ3",
                "vendor": "Seagate",
                "vslot": "2",
                "wwn": "5000c5004f784640"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "7",
                "sn": "Z1P4RLS4",
                "vendor": "Seagate",
                "vslot": "7",
                "wwn": "5000c5004f79a1d6"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "3",
                "sn": "Z1P48RL3",
                "vendor": "Seagate",
                "vslot": "10",
                "wwn": "5000c5004ee8e9ab"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "4",
                "sn": "Z1P48VEG",
                "vendor": "Seagate",
                "vslot": "6",
                "wwn": "5000c5004ee71a3c"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "0",
                "sn": "Z1P48433",
                "vendor": "Seagate",
                "vslot": "9",
                "wwn": "5000c5004eede9ae"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "1",
                "sn": "Z1P4RPBM",
                "vendor": "Seagate",
                "vslot": "5",
                "wwn": "5000c5004f78686d"
              },
              {
                "capacity": "2.0 TB",
                "disk_type": "SATA",
                "exist_flag": "True",
                "fw": "SN03",
                "model": "ST2000NM0011",
                "slot": "2",
                "sn": "Z1P48V7S",
                "vendor": "Seagate",
                "vslot": "1",
                "wwn": "5000c5004ee692b7"
              }
            ],
            "nic": [
              {
                "ipaddr": "169.254.128.3",
                "mac": "e4:1d:2d:71:15:f1",
                "nic_id": "eth2",
                "type": "internal"
              },
              {
                "ipaddr": "10.10.99.91",
                "mac": "e4:1d:2d:71:15:f2",
                "nic_id": "eth3",
                "type": "external"
              }
            ],
            "psu": [
              {
                "ps_id": "PSU0"
              },
              {
                "ps_id": "PSU1"
              }
            ],
            "ram": 31.39,
            "status": "alive"
          },
          "module_name": "hardware_info"
        }
      })
      const actual = iterator.next(getResponse()).value
      assert.deepEqual(expected, actual)
    })

    it('should handle get service status error', () => {
      // prepare error
      const error = 'error msg'

      const expected = put({
        type: GET_SERVICE_STATUS_ERROR,
        ip: '10.10.99.91',
        id: 1,
        error: 'error msg'
      })
      const actual = iterator.throw(error).value
      assert.deepEqual(expected, actual)
    })
  })
})