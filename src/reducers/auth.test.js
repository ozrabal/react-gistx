import auth from './auth'
import {
  types
} from '../actions/auth'

const initialState = {
  token: undefined,
  fetching: false,
  error: null,
}

describe('store/topics/reducer', () => {

  it('should have initial state', () => {
    expect(auth()).toEqual(initialState)
  })

  it('should not affect state', () => {
    expect(auth(undefined, {type:types.UNDEFINED})).toEqual(initialState)
  })
/*
it('should handle GET_TOKEN_SUCCESS', () => {
    const token = 'token'
  const state = Object.assign({}, initialState, {token})
  expect(auth(undefined, {type:types.GET_TOKEN_SUCCESS, payload: {token}})).toEqual(state)
})

  it('should handle GET_TOKEN_FAILED', () => {
    const state = Object.assign({}, initialState)
    expect(auth(state, {type:types.GET_TOKEN_FAILED})).toEqual(initialState)
  })
*/

  it('should handle VALIDATED_TOKEN', () => {
    const token = '111'
    const result = Object.assign({},initialState, {token})
    expect(auth(undefined, {type:types.VALIDATED_TOKEN, payload: { token }})).toEqual(result)
  })

  it('should handle ERROR_VALIDATING_TOKEN', () => {
    const error = 'Error message'
    const resultError = Object.assign({}, initialState, {error})
    expect(auth(undefined, {type:types.ERROR_VALIDATING_TOKEN, payload: { error }})).toEqual(resultError)
  })

})
