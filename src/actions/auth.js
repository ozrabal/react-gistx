export const types = {
    VALIDATE_TOKEN: 'VALIDATE_TOKEN',
    VALIDATED_TOKEN: 'VALIDATED_TOKEN',
    ERROR_VALIDATING_TOKEN: 'ERROR_VALIDATING_TOKEN'
}

export const validateToken = () => ({
    type: types.VALIDATE_TOKEN
})
export const validatedToken = (token) => ({
    payload: {
        token: token
    },
    type: types.VALIDATED_TOKEN
})

export const errorValidatingToken = (error) => ({
    payload: {
        error: error
    },
    type: types.ERROR_VALIDATING_TOKEN
})
