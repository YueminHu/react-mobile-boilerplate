import * as React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
  Link
} from 'react-router-dom';

import Secondary from './pages/second';
import Main from './pages/home';
import { Action } from 'history';

export const routeStyles: React.CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '0',
  height: '100%',
  width: '100%',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  overflowY: 'scroll',
  transition: 'transform 250ms ease-in, filter 250ms linear'
};

// 标示用户是要前进还是后退
// 前进时, 组件从右边出现;
// 后退时, 组件从左边出现
let historyGoForward: boolean = false;
window.addEventListener('popstate', () => (historyGoForward = false));

class App extends React.PureComponent<RouteComponentProps, {}> {
  state = {
    headerText: '常见问题'
  };
  componentDidMount() {
    const shade = document.querySelector('#loading');
    shade && shade.remove();
    const { history, location } = this.props;
    history.listen((_location, action: Action) => {
      if (action === 'PUSH') {
        historyGoForward = true;
      } else if (action === 'POP') {
        historyGoForward = false;
      }
    });
  }
  render() {
    const { location, history, match } = this.props;
    return (
      <div
        style={{
          height: '100%'
        }}
      >
        <TransitionGroup className={'wrapper'}>
          <CSSTransition
            key={location.pathname}
            classNames='fade'
            timeout={250}
            onEnter={elem => {
              elem.style.zIndex = '1';
              if (historyGoForward) {
                elem.style.transform = 'translateX(100%)';
              } else {
                elem.style.transform = 'translateX(-100%)';
              }
            }}
            onEntering={elem => {
              elem.style.transform = 'none';
            }}
            onEntered={elem => {
              elem.style.zIndex = elem.style.transform = '';
            }}
            onExit={elem => {
              elem.style.filter = 'brightness(0.7)';
            }}
            onExiting={elem => {
              if (historyGoForward) {
                elem.style.transform = 'translateX(-20%)';
              } else {
                elem.style.transform = 'translateX(20%)';
              }
            }}
            onExited={elem => {
              elem.style.transform = '';
            }}
          >
            <Switch location={location}>
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
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
