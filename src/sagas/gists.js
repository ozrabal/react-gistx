import {  all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { receivedGists, errorRequestingGists, applyTags, appliedTags, errorApplyingTags, types as gistTypes } from '../actions/gists'
import { requestTags, errorRequestingTags , types as tagTypes} from '../actions/tags'
import { fetchGists } from '../api/gists'

export const fetchGistsFromApi = function *(action) {
    try {
        const gistsFromApi = yield call(fetchGists)
           yield put(receivedGists(gistsFromApi))
    } catch(error) {
        yield put(errorRequestingGists(error.message))
    }
}

const watchRequestGists = function *() {
    yield takeLatest(gistTypes.REQUEST_GISTS, fetchGistsFromApi)
}

export const fetchTagsFromApi = function *(action) {
    try {
        yield put(requestTags())
    } catch(error) {
        yield put(errorRequestingTags(error.message))
    }
}

export const applyTagsToGists = function *(action) {
    try {
        yield put.resolve(applyTags(action.payload.tags))
        yield put(appliedTags())
    } catch(error) {
        yield put(errorApplyingTags(error.message))
    }
}

const watchReceivedGists = function *() {
    yield takeLatest([gistTypes.RECEIVED_GISTS, tagTypes.REMOVED_TAG], fetchTagsFromApi)
}

const watchReceivedTags = function *() {
    yield takeLatest([tagTypes.RECEIVED_TAGS, tagTypes.ADDED_TAG], applyTagsToGists)
}

export default function *gists() {
    yield all([
        fork(watchRequestGists),
        fork(watchReceivedGists),
        fork(watchReceivedTags)
    ])
}
