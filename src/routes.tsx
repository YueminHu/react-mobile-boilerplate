import * as React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import Secondary from './pages/second';
import Main from './pages/home';

let historyGoForward: boolean = true;
window.addEventListener('popstate', () => (historyGoForward = false));
// win

const duration = 300

const Routes = (props: RouteComponentProps) => {
  const { history, location } = props;
  React.useEffect(() => {
    history.listen((_location, action) => {
      if (action === 'PUSH')
      {
        historyGoForward = true;
      } else if (action === 'POP')
      {
        historyGoForward = false;
      }
    });
  }, [])
  return <div className='routes-wrapper'><TransitionGroup>
    <CSSTransition key={location.key} timeout={{ enter: duration, exit: duration }} classNames={`transition-pan-${historyGoForward ? 'push' : 'pop'}`} onExiting={(elem: HTMLElement) => {
      if (historyGoForward)
      {
        elem.style.transform = 'translateX(-20%)';
      } else
      {
        elem.style.transform = 'translateX(20%)';
      }
    }}>

      <Switch location={location}>
        <Route path='/' exact component={Main} />
        <Route
          path='/secondary/:id'
          component={Secondary}
        />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
  </div>

};

export default withRouter(Routes);
