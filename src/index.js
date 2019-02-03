import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from './routes';
import './assets/styles/style';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
      <> 

        {routes}

      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
