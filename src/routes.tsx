import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Location } from 'history';

import Secondary from './pages/second';
import Main from './pages/home';

const Routes = (props: { location: Location }) => (
  <Switch location={props.location}>
    <Route path='/' exact render={props => <Main {...props} />} />
    <Route
      path='/secondary/:id'
      exact
      render={props => <Secondary {...props} />}
    />
    <Route
      path='/secondary/:id/main'
      exact
      render={props => <Main {...props} />}
    />
  </Switch>
);

export default Routes;
