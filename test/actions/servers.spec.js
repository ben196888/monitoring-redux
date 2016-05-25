import expect from 'expect'
import { ADD_SERVER, addServer } from '../../actions'

describe('Actions/ servers', () => {
  describe('addServer', () => {
    it('should create addServer action', () => {
      expect(addServer('10.10.99.90')).toEqual({
        type: ADD_SERVER,
        id: 0,
        ip: '10.10.99.90'
      })
    })
  })
})