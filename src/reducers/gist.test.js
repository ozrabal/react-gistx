import gist from './gist'

import {
    types
} from '../actions/gist'

const initialState = {
    item: null,
    fetching: false,
    error: null,
}

describe('store/gist/reducer', () => {
    it('should have initial state', () => {
        expect(gist()).toEqual(initialState)
    })

    it('should not affect state', () => {
      expect(gist(undefined, {type:types.UNDEFINED})).toEqual(initialState)
    })

    it('should handle ERROR_ATTACHING_TAGS', () => {
        const error = 'Error message'
        const resultError = Object.assign({}, initialState, {error})
        expect(gist(undefined, {type:types.ERROR_ATTACHING_TAGS, payload: { error }})).toEqual(resultError)
    })

    it('should handle ATTACHED_TAGS', () => {
        const result = Object.assign({},initialState)
        expect(gist(undefined, {type:types.ATTACHED_TAGS})).toEqual(result)
    })

    it('should handle DETACH_TAG', () => {
        const result = Object.assign({},initialState, {fetching:true})
        expect(gist(undefined, {type:types.DETACH_TAG})).toEqual(result)
    })

    it('should handle DETACHED_TAG', () => {
        const result = Object.assign({},initialState)
        expect(gist(undefined, {type:types.DETACHED_TAG})).toEqual(result)
    })

    it('should handle ERROR_DETACHING_TAG', () => {
        const error = 'Error message'
        const resultError = Object.assign({}, initialState, {error})
        expect(gist(undefined, {type:types.ERROR_DETACHING_TAG, payload: { error }})).toEqual(resultError)
    })

    it('should handle ATTACH_TAGS',() => {
        let state = Object.assign({}, initialState, { item: {id: '0cc3176940d22690bc52439837a4af78'}})
        const result = Object.assign({}, initialState, { item: { id:'0cc3176940d22690bc52439837a4af78', tag: ['tag'] } } )
        const payload = { tags: {'0cc3176940d22690bc52439837a4af78':['tag']}  }
        expect(gist(state, {type:types.ATTACH_TAGS, payload } ) ).toEqual(result)
        
        state = Object.assign({}, initialState, { item: {id: 'other'}})
        expect(gist(state, {type:types.ATTACH_TAGS, payload } ) ).toEqual(state)
    })

    it('should handle REQUEST_GIST', () => {
        const result = Object.assign({},initialState, {fetching: true})
        expect(gist(undefined, {type:types.REQUEST_GIST})).toEqual(result)
    })

    it('should handle RECEIVED_GIST', () => {
        const result = Object.assign({},initialState, { item: {id: 'item_id'}})
        expect(gist(undefined, {type:types.RECEIVED_GIST, payload: {gist: {id: 'item_id'}}})).toEqual(result)
    })

    it('should handle ERROR_REQUESTING_GIST', () => {
        const result = Object.assign({},initialState, {error: 'error'})
        expect(gist(undefined, {type:types.ERROR_REQUESTING_GIST, payload: {error: 'error'}})).toEqual(result)
    })
})
