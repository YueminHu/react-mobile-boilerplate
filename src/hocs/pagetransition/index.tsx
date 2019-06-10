import * as React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { History, Action } from 'history';

// 标示用户是要前进还是后退
// 前进时, 组件从右边出现;
// 后退时, 组件从左边出现
let historyGoForward: boolean = false;
window.addEventListener('popstate', () => (historyGoForward = false));

class PageTransition extends React.PureComponent<{
  history: History;
}> {
  constructor(props) {
    super(props);
    const { history } = props;
    history.listen((_location, action: Action) => {
      if (action === 'PUSH') {
        historyGoForward = true;
      } else if (action === 'POP') {
        historyGoForward = false;
      }
    });
  }
  render() {
    return (
      <TransitionGroup
        className={'wrapper'}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
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
            // elem.style.filter = 'brightness(0.7)';
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
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default PageTransition;
