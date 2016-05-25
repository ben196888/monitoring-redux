import expect from 'expect'
import { TOGGLE_SERVICE, toggleService } from '../../actions'

describe('Actions/ services', () => {
  describe('toggleService', () => {
    it('should create TOGGLE_SERVICE action', () => {
      expect(toggleService(1)).toEqual({
        type: TOGGLE_SERVICE,
        id: 1
      })
    })
  })
})