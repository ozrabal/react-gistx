import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'
import { injectGlobal } from 'styled-components'
import App from './App';

export const history = createHistory()
const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
,document.getElementById('root'))

injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`
registerServiceWorker()
