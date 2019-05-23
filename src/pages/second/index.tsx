import * as React from 'react';
import Loadable from 'components/loadable';
import RoutePage from 'components/routePage';

export default (props) => (
  <RoutePage>
    <Loadable {...props}>{() => import('./second')}</Loadable>
  </RoutePage>
);
