/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Report from './pages/Report';
import NotFound from './pages/NotFound';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/clientList" component={Main} />
      <Route exact path="/report" component={Report} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default routes;
