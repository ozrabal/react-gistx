import user from './user'

import {
    types
} from '../actions/user'

const initialState = {
    user: null,
    fetching: false,
    error: null,
}

describe('store/user/reducer', () => {
    it('should have initial state', () => {
        expect(user()).toEqual(initialState)
    })

    it('should handle REQUEST_USER', () => {
        const result = Object.assign({}, initialState, {fetching: true})
        expect(user(undefined, {type:types.REQUEST_USER})).toEqual(result)
    })

    it('should handle RECEIVED_USER', () => {
        const result = Object.assign({}, initialState, {fetching: false, user: {id: 'id'}})
        const payload = {user: {id: 'id'}}
        expect(user(undefined, {type:types.RECEIVED_USER, payload: payload})).toEqual(result)
    })

    it('should handle ERROR_REQUESTING_USER', () => {
        const error = 'Error message'
        const result = Object.assign({}, initialState, {error})
        expect(user(undefined, {type:types.ERROR_REQUESTING_USER, payload: {error}})).toEqual(result)
    })
})
