import { types } from '../actions/gists'

const {
    REQUEST_GISTS,
    RECEIVED_GISTS,
    ERROR_REQUESTING_GISTS,
    APPLY_TAGS,
    APPLIED_TAGS,
    ERROR_APPLYING_TAGS,
    FILTER_BY_TAG,
    FILTERED_BY_TAG,
} = types

export const initialState = {
    items: null,
    bytag: null,
    fetching: false,
    error: null
}

export default function gists(state = initialState, action={}) {
    switch (action.type) {
        case REQUEST_GISTS:
            return {
                ...state,
                bytag: null,
                fetching: true,
                items: null
            }
        case RECEIVED_GISTS:
            return {
                ...state,
                fetching: false,
                items: action.payload.gists
            }
        case ERROR_REQUESTING_GISTS:
            return {
                ...state,
                error: action.payload.error
            }
        case APPLY_TAGS:
            return {
                ...state,
                items: Object.assign( state.items.map(item => {
                    for (let [key, value] of Object.entries(action.payload.tags)) {
                        if(item.id === key) {
                            return { ...item, tag: value }
                        }
                    }
                    return item
                }))
            }
        case APPLIED_TAGS:
            return {
                ...state,
            }
        case ERROR_APPLYING_TAGS:
            return {
                ...state,
                error: action.payload.error
            }
        case FILTER_BY_TAG:
            return {
                ...state,
                bytag: null,
            }
        case FILTERED_BY_TAG:
        console.log('reducer', action.payload)
            return {
                ...state,
                bytag: Object.assign(state.items.filter((item) => {
                    if(item.tag) {
                    return item.tag.find((tag) => {

                        return tag === action.payload.tag
                    })
                }
                }))
            }
        default:
            return state
    }
}
