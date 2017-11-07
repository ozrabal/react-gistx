import { testSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects'

import { receivedTags, addedTag, removedTag, types } from '../actions/tags'
import { fetchTags, saveTag, removeTag } from '../api/tags'
import { removeTagApi, saveTagApi, fetchTagsFromApi } from './tags'

it ('removeTagApi', () => {
    const action = {
        type: types.REMOVE_TAG,
        payload: {
            tag: 'tag',
            gist_id: 10
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: types.ERROR_REMOVING_TAG,
        payload: {
            error: error.message
        }
    }
    testSaga(removeTagApi, action)
        .next().call(removeTag, action.payload.tag, action.payload.gist_id )
        .next(action).put.resolve(removedTag(action.payload.tag, action.payload.gist_id))
        .throw(error).put(errorAction)
        .next().isDone()
})


it ('saveTagApi', () => {
    const action = {
        type: types.ADD_TAG,
        payload: {
            tag: 'tag',
            gist_id: 10
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: types.ERROR_ADDING_TAG,
        payload: {
            error: error.message
        }
    }
    testSaga(saveTagApi, action)
        .next().call(saveTag, action.payload.tag, action.payload.gist_id)
        .next().throw(error).put(errorAction)
        .next().isDone()
})

it ('fetchTagsFromApi', () => {
    const action = {
        type: types.REQUEST_TAGS,
        payload: {
            tag: 'tag',
            gist_id: 10
        }
    }
    const error = new Error('Error message')
    const errorAction = {
        type: types.ERROR_REQUESTING_TAGS,
        payload: {
            error: error.message
        }
    }
    testSaga(fetchTagsFromApi, action)
        .next().call(fetchTags)
        .next().throw(error).put(errorAction)
        .next().isDone()
})
