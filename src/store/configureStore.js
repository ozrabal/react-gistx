import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore(preloadedState) {
    const sagaMiddleware = createSagaMiddleware()
    const logger = createLogger({ collapsed: true })
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(sagaMiddleware, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
        )
    )
    sagaMiddleware.run(rootSaga)
    return store
}
