import { types } from '../actions/tags'

const {
    REQUEST_TAGS,
    RECEIVED_TAGS,
    ERROR_REQUESTING_TAGS,
    ADD_TAG,
    ADDED_TAG,
    ERROR_ADDING_TAG,
    REMOVE_TAG,
    REMOVED_TAG,
    ERROR_REMOVING_TAG,
} = types

export const initialState = {
    tags: null,
    fetching: false,
    error: null
}

export default function tags(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_TAGS:
            return {
                ...state,
                fetching: true,
                tags: null
            }
        case RECEIVED_TAGS:
            return {
                ...state,
                fetching: false,
                tags: action.payload.tags
            }
        case ERROR_REQUESTING_TAGS:
            return {
                ...state,
                error: action.payload.error
            }
        case ADD_TAG:
            return {
                ...state,
                fetching: true,
                tags: null
            }
        case ADDED_TAG:
            return {
                ...state,
                fetching: false,
                tags: action.payload.tag
            }
        case ERROR_ADDING_TAG:
            return {
                ...state,
                error: action.payload.error
            }
        case REMOVE_TAG:
            return {
                ...state,
                fetching: true,
                tags: null
            }
        case REMOVED_TAG:
            return {
                ...state,
                fetching: false,
                tags: action.payload.tags
            }
        case ERROR_REMOVING_TAG:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state

    }
}
