import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';
import 'isomorphic-fetch';
import 'styles/app.scss';

const store = configureStore();

render(
  <AppContainer store={store} />,
  document.getElementById('root')
);
