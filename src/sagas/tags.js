import {  all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { requestAllTags, receivedAllTags, receivedTags, errorRequestingTags, addedTag, errorAddingTag, removedTag, errorRemovingTag, types } from '../actions/tags'
import { fetchTags, saveTag, removeTag } from '../api/tags'

const watchRequestTags = function *() {
    yield takeLatest(types.REQUEST_TAGS, fetchTagsFromApi)
}

export const fetchTagsFromApi = function *(action) {
    try {
        const tagsFromApi = yield call(fetchTags)
        yield put.resolve(receivedTags(tagsFromApi))
        yield put.resolve(requestAllTags())
        yield put.resolve(receivedAllTags(tagsFromApi))
    } catch(error) {
        yield put(errorRequestingTags(error.message))
    }
}

const watchAddTag = function *() {
    yield takeLatest(types.ADD_TAG, saveTagApi)
}

export const saveTagApi = function *(action) {
    try {
        const tags = yield call(saveTag, action.payload.tag, action.payload.gist_id)
        yield put.resolve(addedTag(tags))
        yield put(requestAllTags())
        yield put.resolve(receivedAllTags(tags))
    } catch(error) {
        yield put(errorAddingTag(error.message))
    }
}

const watchRemoveTag = function *() {
    yield takeLatest(types.REMOVE_TAG, removeTagApi)
}

export const removeTagApi = function *(action) {
    try {
        yield call(removeTag, action.payload.tag, action.payload.gist_id)
        yield put.resolve(removedTag(action.payload.tag, action.payload.id))
    } catch(error) {
        yield put(errorRemovingTag(error.message))
    }
}

export default function *tags() {
    yield all([
        fork(watchRequestTags),
        fork(watchAddTag),
        fork(watchRemoveTag)
    ])
}
