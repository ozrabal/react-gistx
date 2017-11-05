import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import { validateToken } from '../api/auth'
import { validatedToken, errorValidatingToken, types as authTypes } from '../actions/auth'

const watchValidateToken = function *() {
    yield takeLatest(authTypes.VALIDATE_TOKEN, validateTokenFromApi)
}

export const validateTokenFromApi = function *(action) {
  try {
    const authorization = yield call(validateToken)
    yield put(validatedToken(authorization.token))
  } catch(error) {
    yield put(errorValidatingToken(error.message))
  }
}

export default function *auth() {
    yield all([
        fork(watchValidateToken)
    ])
}
