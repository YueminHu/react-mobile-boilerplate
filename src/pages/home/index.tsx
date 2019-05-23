import * as React from 'react';
import Home from './home';
import Loadable from 'components/loadable';
import RoutePage from 'components/routePage';

export default (props) => (
  <RoutePage>
    <Loadable {...props}>{() => import('./home')}</Loadable>
  </RoutePage>
);
