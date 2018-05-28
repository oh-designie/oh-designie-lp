import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './';

interface AppProps {}

interface AppStates {}

export default class App extends React.Component<AppProps, AppStates> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
