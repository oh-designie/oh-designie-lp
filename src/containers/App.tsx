import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import '../assets/css/styles.css';

import { Home } from '.';
import { EN_US } from '../locales';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Home textMap={EN_US} />} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
