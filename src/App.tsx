import * as React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import { Action } from 'history';
import Routes from './routes';
import PageTransition from 'hocs/pagetransition';
import { hot } from 'react-hot-loader/root';

export const routeStyles: React.CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '0',
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  overflowY: 'scroll',
  transition: 'transform 300ms ease-in'
};

class App extends React.PureComponent<RouteComponentProps, {}> {
  state = {};
  componentDidMount() {
    const shade = document.querySelector('#loading');
    shade && shade.remove();
  }
  render() {
    return <Routes />;
  }
}

export default withRouter(hot(App));
