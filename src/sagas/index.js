import { all, fork } from 'redux-saga/effects'
import gists from './gists'
import gist from './gist'
import auth from './auth'
import tags from './tags'

export default function *sagas() {
    yield all([
      fork(auth),
      fork(gists),
      fork(gist),
      fork(tags)
    ])
}
