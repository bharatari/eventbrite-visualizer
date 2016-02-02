import React from 'react';
import { Route } from 'react-router';
import PageTransition from './components';
import {
  HomeContainer,
  DataContainer,
} from './containers';

export default (
  <Route>
    <Route component={PageTransition}>
      <Route path="/" component={HomeContainer} />
      <Route path="/data" component={DataContainer} />
    </Route>
  </Route>
);
