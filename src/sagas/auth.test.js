import { call, put, take } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { validateTokenFromApi } from './auth'
import { validateToken } from '../api/auth'
import { validatedToken, errorValidatingToken, types as authTypes } from '../actions/auth'

const action = { token: 'TEST' };

it('works with unit tests', () => {
    testSaga(validateTokenFromApi, authTypes.VALIDATE_TOKEN)
    .next()
    .call(validateToken)
    .next(action)
    .put(validatedToken(action.token))
    .next()
    .isDone()
})
