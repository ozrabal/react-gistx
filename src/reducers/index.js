import { combineReducers } from 'redux'
import { routerReducer} from 'react-router-redux'

import auth from './auth'
import gists from './gists'
import gist from './gist'
import user from './user'
import tags from './tags'

const reducers = combineReducers({
    auth,
    gists,
    gist,
    user,
    tags,
    router: routerReducer,
})

export default reducers
