import { call } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { fetchGist } from '../api/gists'
import { fetchTags } from '../api/tags'
import { receivedGist, attachTags, attachedTags, types } from '../actions/gist'
import { attachTagsFromApi, fetchGistFromApi } from './gist'

it ('attachTagsFromApi', () => {
    const action = {
        type:types.RECEIVED_GIST,
        payload: {
            tags: []
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: types.ERROR_ATTACHING_TAGS,
        payload: {
            error: error.message
        }
    }
    testSaga(attachTagsFromApi, action)
    .next().call(fetchTags)
    .next(action).put.resolve(attachTags(action))
    .next().put(attachedTags())
    .throw(error).put(errorAction)
    .next().isDone()
})

it ('fetchGistFromApi', () => {
    const action = {
        type:types.REQUEST_GIST,
        payload: {
            id: 10
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: types.ERROR_REQUESTING_GIST,
        payload: {
            error: error.message
        }
    }

    testSaga(fetchGistFromApi, action)
        .next().call(fetchGist, action.payload.id)
        .next(action).put.resolve(receivedGist(action))
        .throw(error).put(errorAction)
        .next().isDone()
})
