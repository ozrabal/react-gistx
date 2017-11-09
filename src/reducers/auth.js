import { types } from '../actions/auth'

const {
    VALIDATE_TOKEN,
    VALIDATED_TOKEN,
    ERROR_VALIDATING_TOKEN
} = types

const initialState = {
    token: undefined,
    fetching: false,
    error: null
}

export default function auth(state = initialState, action = {}) {
    switch (action.type) {
        case VALIDATE_TOKEN:
            return {
                ...state,
                fetching: true
            }
        case VALIDATED_TOKEN:
            return {
                ...state,
                fetching: false,
                token: action.payload.token
            }
        case ERROR_VALIDATING_TOKEN:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}
