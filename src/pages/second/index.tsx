import * as React from 'react';
import Loadable from 'hocs/loadable';
import RoutePage from 'hocs/routePage';

export default props => (
  <RoutePage>
    <Loadable {...props}>{() => import('./second')}</Loadable>
  </RoutePage>
);
