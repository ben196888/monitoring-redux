import expect from 'expect'
import servers from '../../reducers/servers'
import {
  ADD_SERVER,
  POLL_SERVICE_STATUS,
  GET_SERVICE_STATUS_SUCCESS,
  GET_SERVICE_STATUS_ERROR,
  GET_SERVICE_STATUS_CANCEL
} from '../../actions'

describe('Reducers/ servers', () => {
  it('should handle initial state', () => {
    // handle initial state
    expect(
      servers(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_SERVER', () => {
    // add a server
    expect(
      servers([], {
        type: ADD_SERVER,
        ip: '10.10.99.90',
        id: 0
      })
    ).toEqual([
      {
        id: 0,
        ip: '10.10.99.90',
        show: [],
        servicesStatus: {
          status: 'init'
        }
      }
    ])

    // add another server
    expect(
      servers([
        {
          id: 0,
          ip: '10.10.99.90',
          show: [],
          servicesStatus: {
            status: 'init'
          }
        }
      ], {
        type: ADD_SERVER,
        ip: '10.10.99.91',
        id: 1
      })
    ).toEqual([
      {
        id: 0,
        ip: '10.10.99.90',
        show: [],
        servicesStatus: {
          status: 'init'
        }
      },
      {
        id: 1,
        ip: '10.10.99.91',
        show: [],
        servicesStatus: {
          status: 'init'
        }
      }
    ])
  })
  it('should handle POLL_SERVICE_STATUS', () => {
    // poll a service status
    expect(servers([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'init'
      }
    }], {
      type: POLL_SERVICE_STATUS,
      ip: '10.10.99.90',
      id: 2,
      name: 'CpuStatus'
    })).toEqual([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        2: {status: 'fetching'}
      }
    }])

    // poll another service status
    expect(servers([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        2: {status: 'fetching'}
      }
    }], {
      type: POLL_SERVICE_STATUS,
      ip: '10.10.99.90',
      id: 3,
      name: 'PowerStatus'
    })).toEqual([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        2: {status: 'fetching'},
        3: {status: 'fetching'}
      }
    }])
  })
  it('should handle GET_SERVICE_STATUS_SUCCESS', () => {
    expect(servers([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        2: {status: 'fetching'},
        3: {status: 'fetching'}
      }
    }], {
      type: GET_SERVICE_STATUS_SUCCESS,
      ip: '10.10.99.90',
      id: 2,
      response: {
        'error_mesg': null,
        'hostname': 'hopebay-00-01',
        'mesg': [
          {
            'cpu_id': 'cpu0',
            'temperature': 41,
            'temperature_status': '0x1010',
            'usage': 0.2506
          },
          {
            'cpu_id': 'cpu1',
            'temperature': 39,
            'temperature_status': '0x1010',
            'usage': 0
          }
        ],
        'module_name': 'cpu_status'
      }
    })).toEqual([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        2: {
          status: 'fetched',
          data: [
            {
              'cpu_id': 'cpu0',
              'temperature': 41,
              'temperature_status': '0x1010',
              'usage': 0.2506
            },
            {
              'cpu_id': 'cpu1',
              'temperature': 39,
              'temperature_status': '0x1010',
              'usage': 0
            }
          ]
        },
        3: {status: 'fetching'}
      }
    }])
  })
  it('should handle GET_SERVICE_STATUS_ERROR', () => {
    expect(servers([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        2: {
          status: 'fetched',
          data: [
            {
              'cpu_id': 'cpu0',
              'temperature': 41,
              'temperature_status': '0x1010',
              'usage': 0.2506
            },
            {
              'cpu_id': 'cpu1',
              'temperature': 39,
              'temperature_status': '0x1010',
              'usage': 0
            }
          ]
        },
        3: {status: 'fetching'}
      }
    }], {
      type: GET_SERVICE_STATUS_ERROR,
      ip: '10.10.99.90',
      id: 3,
      error: 'error msg'
    })).toEqual([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        2: {
          status: 'fetched',
          data: [
            {
              'cpu_id': 'cpu0',
              'temperature': 41,
              'temperature_status': '0x1010',
              'usage': 0.2506
            },
            {
              'cpu_id': 'cpu1',
              'temperature': 39,
              'temperature_status': '0x1010',
              'usage': 0
            }
          ]
        },
        3: {
          status: 'error',
          error: 'error msg'
        }
      }
    }])
  })
  it('should handle GET_SERVICE_STATUS_CANCEL', () => {
    expect(servers([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        1: {status: 'fetching'},
        2: {
          status: 'fetched',
          data: [
            {
              'cpu_id': 'cpu0',
              'temperature': 41,
              'temperature_status': '0x1010',
              'usage': 0.2506
            },
            {
              'cpu_id': 'cpu1',
              'temperature': 39,
              'temperature_status': '0x1010',
              'usage': 0
            }
          ]
        },
        3: {
          status: 'error',
          error: 'error msg'
        }
      }
    }], {
      type: GET_SERVICE_STATUS_CANCEL,
      ip: '10.10.99.90',
      id: 1
    })).toEqual([{
      id: 0,
      ip: '10.10.99.90',
      show: [],
      servicesStatus: {
        status: 'connected',
        1: {status: 'init'},
        2: {
          status: 'fetched',
          data: [
            {
              'cpu_id': 'cpu0',
              'temperature': 41,
              'temperature_status': '0x1010',
              'usage': 0.2506
            },
            {
              'cpu_id': 'cpu1',
              'temperature': 39,
              'temperature_status': '0x1010',
              'usage': 0
            }
          ]
        },
        3: {
          status: 'error',
          error: 'error msg'
        }
      }
    }])
  })
})