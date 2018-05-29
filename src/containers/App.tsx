import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import '../assets/css/styles.css';
import { Home } from './';

interface AppProps {}

interface AppStates {}

export class App extends React.Component<AppProps, AppStates> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
