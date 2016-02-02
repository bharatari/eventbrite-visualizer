import { applyMiddleware, compose, createStore } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk';

const createHistory = require('history/lib/createBrowserHistory');

import rootReducer from '../reducers/index';
import routes from '../routes';

const middleware = [
  thunkMiddleware,
];

const composeStore = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ routes, createHistory }),
)(createStore);

export default function configureStore(initialState) {
  return composeStore(rootReducer, initialState);
}
