import * as React from 'react';
import Loadable from 'hocs/loadable';
import RoutePage from 'hocs/routePage';
import Home from './home';
import { is_dev } from 'config';

// export default props =>
//   is_dev ? (
//     <Loadable {...props}>{() => import('./home')}</Loadable>
//   ) : (
//     <Home {...props}></Home>
//   );

  export default props =>   <Home {...props}></Home>