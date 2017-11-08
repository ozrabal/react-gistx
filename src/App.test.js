import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './store/configureStore'
import App from './App'

it('renders without crashing', () => {
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
