import { types } from '../actions/tags'

const {
    REQUEST_ALL_TAGS,
    RECEIVED_ALL_TAGS,
    ERROR_REQUESTING_ALL_TAGS,
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
    error: null,
    all: null,
}

const generateTagList = (tags) => {
    let out = []
    Object.keys(tags).forEach((key) => {
        out.push(...tags[key])
    })
    return Array.from(new Set(out))
}

export default function tags(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_ALL_TAGS:
            return {
                ...state,
                fetching: true,
                error: null,
                all: Object.assign({}, generateTagList(state.tags))
            }
        case RECEIVED_ALL_TAGS:
            return {
                ...state,
                fetching: false,
            }
        case ERROR_REQUESTING_ALL_TAGS:
            return {
                ...state,
                error: action.payload.error
            }
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
            }
        case ADDED_TAG:
            return {
                ...state,
                fetching: false,
                tags: action.payload.tags
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
