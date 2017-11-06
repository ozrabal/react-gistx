import { types } from '../actions/user'

const {
    REQUEST_USER,
    RECEIVED_USER,
    ERROR_REQUESTING_USER
} = types

export const initialState = {
    user: null,
    fetching: false,
    error: null,
}

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                fetching: true,
            }
        case RECEIVED_USER:
            return {
                ...state,
                fetching: false,
                user: action.payload.user
            }
        case ERROR_REQUESTING_USER:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}
