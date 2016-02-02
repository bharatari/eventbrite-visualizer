import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';
import 'isomorphic-fetch';
import 'vendor/css/bootstrap.min.css';
import 'vendor/css/ionicons.min.css';
import 'vendor/css/react-select.min.css';
import 'styles/app.css';
import 'vendor/js/bootstrap.min.js';

const store = configureStore();

render(
  <AppContainer store={store} />,
  document.getElementById('root')
);
