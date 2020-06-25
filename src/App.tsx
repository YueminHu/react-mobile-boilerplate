import * as React from 'react';
// import {
//   withRouter,
// } from 'react-router-dom';

// import { Action } from 'history';
import Routes from './routes';
// import PageTransition from 'hocs/pagetransition';
import { hot } from 'react-hot-loader/root';

const App = () => {
  React.useEffect(() => {
    const shade = document.querySelector('#loading');
    shade && shade.remove();
  }, [])
  return <Routes />;
}

export default (hot(App));
