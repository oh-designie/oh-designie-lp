import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { pure } from 'recompose';

import '../assets/css/styles.css';

import { Home } from '.';
import { EN_US } from '../locales';

export const App = pure(() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Home textMap={EN_US} />} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
));
