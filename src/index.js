import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
//import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
//import { ConnectedRouter } from 'connected-react-router'
// import auth from './reducers/auth'
// import gists from './reducers/gists'
// import thunkMiddleware from 'redux-thunk'
//import { createLogger } from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga'
// import { rootSaga } from './rootSaga'

import configureStore from './store/configureStore'
import App from './App';
// const logger = createLogger({ collapsed: true })
export const history = createHistory()
//export const history = createBrowserHistory()
const store = configureStore()
// const middleware = routerMiddleware(history)
// const sagaMiddleware = createSagaMiddleware()
/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    combineReducers({
      auth,
      gists,
      router: routerReducer
  }),  composeEnhancers(
    applyMiddleware(middleware,thunkMiddleware)

      ));
*/
/*
const store = createStore(combineReducers({
  auth,
  gists,
  router: routerReducer
}), composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunkMiddleware),
  // other store enhancers if any
));
*/
/*
const store = createStore(
  combineReducers({
    auth,
    gists,
    router: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  applyMiddleware(middleware,thunkMiddleware),

)
*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>

  ,document.getElementById('root')
);

registerServiceWorker();
