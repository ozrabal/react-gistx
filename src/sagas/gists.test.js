import { testSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'

import { receivedGists, applyTags, appliedTags, types as gistTypes } from '../actions/gists'
import { requestTags, types} from '../actions/tags'
import { fetchGists } from '../api/gists'
import { applyTagsToGists, fetchTagsFromApi, fetchGistsFromApi } from './gists'

it ('applyTagsToGists', () => {
    const action = {
        type: types.RECEIVED_TAGS,
        payload: {
            tags: 'tag'
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: gistTypes.ERROR_APPLYING_TAGS,
        payload: {
            error: error.message
        }
    }

    testSaga(applyTagsToGists, action)
        .next().put.resolve(applyTags(action.payload.tags))
        .next().put(appliedTags())
        .throw(error)
        .put(errorAction)
        .next().isDone()
})

it ('fetchTagsFromApi', () => {
    const action = {
        type: types.RECEIVED_GISTS,
        payload: {
            tags: []
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: types.ERROR_REQUESTING_TAGS,
        payload: {
            error: error.message
        }
    }

    testSaga(fetchTagsFromApi, action  )
        .next().put(requestTags())
        .throw(error).put(errorAction)
        .next().isDone()
})

it ('fetchGistsFromApi', () => {
    const action = {
        type: types.REQUEST_GISTS,
        payload: {
            tags: []
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: gistTypes.ERROR_REQUESTING_GISTS,
        payload: {
            error: error.message
        }
    }

    testSaga(fetchGistsFromApi, action)
        .next().call(fetchGists)
        .next().put(receivedGists())
        .throw(error).put(errorAction)
        .next().isDone()
})
