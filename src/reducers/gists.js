import { types } from '../actions/gists'

const {
    REQUEST_GISTS,
    RECEIVED_GISTS,
    ERROR_REQUESTING_GISTS,
    APPLY_TAGS,
    APPLIED_TAGS,
    ERROR_APPLYING_TAGS
} = types

export const initialState = {
    items: null,
    fetching: false,
    error: null
}

export default function gists(state = initialState, action={}) {
    switch (action.type) {
        case REQUEST_GISTS:
            return {
                ...state,
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
        default:
            return state
    }
}
