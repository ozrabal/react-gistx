import { types } from '../actions/gist'

const {
    REQUEST_GIST,
    RECEIVED_GIST,
    ERROR_REQUESTING_GIST,
    SET_STYLESHEET,
    SET_SOURCE,
    SET_LOADING,
    ATTACH_TAGS,
    ATTACHED_TAGS,
    ERROR_ATTACHING_TAGS,
    DETACH_TAG,
    DETACHED_TAG,
    ERROR_DETACHING_TAG
} = types

export const initialState = {
    item: null,
    stylesheet: null,
    source: null,
    fetching: false,
    loading: false,
    error: null,
}

export default function gist(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_GIST:
            return {
                ...state,
                fetching: true,
                item: null
            }
        case RECEIVED_GIST:
            return {
                ...state,
                fetching: false,
                item: action.payload.gist
            }
        case ERROR_REQUESTING_GIST:
            return {
                ...state,
                error: action.payload.error
            }
        case SET_STYLESHEET:
            return {
                ...state,
                stylesheet: action.payload.href
            }
        case SET_SOURCE:
            return {
                ...state,
                source: action.payload.src,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        case ATTACH_TAGS:
           let tags = {}
           for (let [key, value] of Object.entries(action.payload.tags)) {
               if(state.item.id === key) {
                   tags = { tag: value }
               }
           }
           return {
               ...state,
               item: Object.assign( {...state.item }, tags )
           }
        case ATTACHED_TAGS:
            return {
                ...state
            }
        case ERROR_ATTACHING_TAGS:
            return {
                ...state,
                error: action.payload.error
            }
        case DETACH_TAG:
            return {
                ...state,
                fetching: true
            }
        case DETACHED_TAG:
            return {
                ...state
            }
        case ERROR_DETACHING_TAG:
            return {
                ...state,
                error: action.payload.error
            }
       default:
            return state
    }
}
