import gists from './gists'

import {
    types
} from '../actions/gists'

const initialState = {
    items: null,
    fetching: false,
    error: null,

}

describe('store/gists/reducer', () => {
    it('should have initial state', () => {
        expect(gists()).toEqual(initialState)
    })

    it('should handle APPLIED_TAGS', () => {
        const result = Object.assign({},initialState)
        expect(gists(undefined, {type:types.APPLIED_TAGS})).toEqual(result)
    })

    it('should handle ERROR_APPLYING_TAGS', () => {
        const error = 'Error message'
        const resultError = Object.assign({}, initialState, {error})
        expect(gists(undefined, {type:types.ERROR_APPLYING_TAGS, payload: { error }})).toEqual(resultError)
    })

    it('should handle APPLY_TAGS',() => {
        let state = Object.assign({}, initialState, { items: [{id: '0cc3176940d22690bc52439837a4af78'}]})
        const result = Object.assign({}, initialState, { items: [ { id:'0cc3176940d22690bc52439837a4af78', tag: ['tag'] } ] } )
        const payload = { tags: {'0cc3176940d22690bc52439837a4af78':['tag']}  }
        expect(gists(state, {type:types.APPLY_TAGS, payload } ) ).toEqual(result)

        //state = Object.assign({}, initialState, { items: [{id: 'other'}]})
        //expect(gists(state, {type:types.ATTACH_TAGS, payload } ) ).toEqual(state)
    })

    it('should handle APPLY_TAGS',() => {
        const result = Object.assign({}, initialState, { items: [ { id:'0cc3176940d22690bc52439837a4af78', tag: ['tag'] }, { id:'s0cc3176940d22690bc52439837a4af78', tag: ['tag'] } ] } )
        const payload = { tags: {'0cc3176940d22690bc52439837a4af78':['tag']} }

        const state = Object.assign({}, initialState, { items: [{id: '0cc3176940d22690bc52439837a4af78', tag: ['tag']}, {id: 'ss0cc3176940d22690bc52439837a4af78'}]})
        expect(gists(state, {type:types.APPLY_TAGS, payload } ) ).toEqual(state)
    })

    it('should handle RECEIVED_GISTS', () => {
        const result = Object.assign({},initialState, { items: [{id: '0cc3176940d22690bc52439837a4af78'}], fetching: false})
        expect(gists(undefined, {type:types.RECEIVED_GISTS, payload: {gists: [{id: '0cc3176940d22690bc52439837a4af78'}]}})).toEqual(result)
    })
})
