import * as React from 'react';
import { Switch, Route } from 'react-router';

import Secondary from './pages/second';
import Main from './pages/home';

const Routes = props => (
  <React.Fragment>
    <Route path='/' exact render={props => <Main {...props} />} />
    <Route
      path='/secondary/:id'
      exact
      render={props => <Secondary {...props} />}
    />
  </React.Fragment>
);

export default Routes;
