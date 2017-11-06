import tags from './tags'

import {
    types
} from '../actions/tags'

const initialState = {
    tags: null,
    fetching: false,
    error: null
}

describe('store/tags/reducer', () => {
    it('should have initial state', () => {
        expect(tags()).toEqual(initialState)
    })

    it('should handle ERROR_REMOVING_TAG', () => {
        const error = 'Error message'
        const resultError = Object.assign({}, initialState, {error})
        expect(tags(undefined, {type:types.ERROR_REMOVING_TAG, payload: { error }})).toEqual(resultError)
    })

    it('should handle REMOVED_TAG', () => {
        const result = Object.assign({}, initialState, {fetching: false, tags: [{'id':['tag']}]})
        const payload = {tags: [{'id':['tag']}]}
        expect(tags(undefined, {type:types.REMOVED_TAG, payload})).toEqual(result)
    })

    it('should handle REMOVE_TAG', () => {
        const result = Object.assign({}, initialState, {fetching: true, tags: null})
        expect(tags(undefined, {type:types.REMOVE_TAG})).toEqual(result)
    })

    it('should handle ERROR_ADDING_TAG', () => {
        const error = 'Error message'
        const result = Object.assign({}, initialState, {error})
        expect(tags(undefined, {type:types.ERROR_ADDING_TAG, payload: {error}})).toEqual(result)
    })

    it('should handle ADD_TAG', () => {
        const result = Object.assign({}, initialState, {fetching: true})
        expect(tags(undefined, {type:types.ADD_TAG})).toEqual(result)
    })

    it('should handle ERROR_REQUESTING_TAGS', () => {
        const error = 'Error message'
        const result = Object.assign({}, initialState, {error})
        expect(tags(undefined, {type:types.ERROR_REQUESTING_TAGS, payload: {error}})).toEqual(result)
    })

    it('should handle REQUEST_TAGS', () => {
        const result = Object.assign({}, initialState, {fetching: true})
        expect(tags(undefined, {type:types.REQUEST_TAGS})).toEqual(result)
    })

    it('should handle RECEIVED_TAGS', () => {
        const result = Object.assign({}, initialState, {fetching: false, tags: [{'id':['tag']}]})
        const payload = {tags: [{'id':['tag']}]}
        expect(tags(undefined, {type:types.RECEIVED_TAGS, payload: payload})).toEqual(result)
    })

    it('should handle ADDED_TAG', () => {
        const result = Object.assign({}, initialState, {fetching: false, tags: [{'id':['tag']}]})
        const payload = {tag: [{'id':['tag']}]}
        expect(tags(undefined, {type:types.ADDED_TAG, payload: payload})).toEqual(result)
    })
})
