import expect from 'expect'
import servers from '../../reducers/servers'
import { ADD_SERVER } from '../../actions'

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
})