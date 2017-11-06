import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './store/configureStore'
import App from './App'

it('renders without crashing', () => {
  console.log = function() { return null}
  console.error = function() {}
  global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0)
  }
  const div = document.createElement('div')
  const history = createHistory()
  const store = configureStore()
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, div)
})
