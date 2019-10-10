import * as React from 'react';
import Loadable from 'hocs/loadable';
import RoutePage from 'hocs/routePage';
import { is_dev } from 'config';
import Second from './second';

export default props =>
  is_dev ? (
    <Loadable {...props}>{() => import('./second')}</Loadable>
  ) : (
    <Second {...props}></Second>
  );
