import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import IndexPage from '../components/IndexPage';
import NotFoundPage from '../components/NotFoundPage';

const routes = () => 
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>


export default routes;