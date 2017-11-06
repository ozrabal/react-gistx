import { call, all, put, fork, takeLatest } from 'redux-saga/effects'
import { receivedGist, errorRequestingGist, attachTags, attachedTags, errorAttachingTags, types } from '../actions/gist'
import { types as tagTypes} from '../actions/tags'

import { fetchGist } from '../api/gists'
import { fetchTags } from '../api/tags'

export const fetchGistFromApi = function *(action) {
    try {
        const gistFromApi = yield call(fetchGist,action.payload.id)
        yield put.resolve(receivedGist(gistFromApi))
    } catch(error) {
        yield put(errorRequestingGist(error.message))
    }
}

const watchRequestGist = function *() {
    yield takeLatest(types.REQUEST_GIST, fetchGistFromApi)
}

export const attachTagsFromApi = function *(action) {
    try {
        const tagsFromApi = yield call(fetchTags)
        yield put.resolve(attachTags(tagsFromApi))
        yield put(attachedTags())
    } catch(error) {
        yield put(errorAttachingTags(error.message))
    }
}

const watchReceivedGist = function *() {
    yield takeLatest([types.RECEIVED_GIST, tagTypes.ADDED_TAG, tagTypes.REMOVED_TAG], attachTagsFromApi)
}
/*
export const detachTagsFromApi = function *(action) {
    try {
//const tagsFromApi = yield call(fetchTags)
    yield put(detachedTag(action.payload.tag, action.payload.id))
    //console.log(tagsFromApi)
    } catch(error) {
console.log('watched detach')
    }
}

const watchDetachTag = function *() {
    console.log('watch detach')
    yield takeLatest([types.DETACH_TAG], detachTagsFromApi)
}
*/

export default function *gist() {
    yield all([
        fork(watchRequestGist),
        fork(watchReceivedGist),
        //fork(watchDetachTag)
    ])
}
