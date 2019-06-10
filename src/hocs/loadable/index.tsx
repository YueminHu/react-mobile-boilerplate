import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RouteComponentProps } from 'react-router';

import * as styles from './index.module.less';

export default class LoadPage extends React.PureComponent<
  RouteComponentProps & {
    children: () => Promise<{
      default: React.ComponentClass<any>;
    }>;
  },
  {
    Component: React.ComponentClass<any> | null;
    indicatorStyle: React.CSSProperties;
    renderIndicator: boolean;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
      indicatorStyle: {},
      renderIndicator: false
    };
    let shouldRenderIndicator: boolean = true;
    // 如果是children已经被resolve, 那只需要大概6ms; 如果需要拉取, 则需要大概15+ms
    setTimeout(() => {
      shouldRenderIndicator &&
        this.setState({
          renderIndicator: true
        });
    }, 10);
    // console.time();
    this.props
      .children()
      .then(Component => {
        // console.timeEnd();
        shouldRenderIndicator = false;
        this.setState({
          Component: Component.default,
          indicatorStyle: {
            opacity: 0
          }
        });
        // 在指示条隐藏后, 去掉指示条
        setTimeout(() => {
          this.setState({
            renderIndicator: false
          });
        }, 300);
      })
      .catch(e => {
        this.setState({
          renderIndicator: false
        });
        alert(String(e));
      });
  }
  render() {
    const { Component, indicatorStyle, renderIndicator } = this.state;
    const rendered = [];
    if (renderIndicator) {
      rendered.push(
        ReactDOM.createPortal(
          <div className={styles.loadingIndicator} style={indicatorStyle} />,
          document.body,
          'pageLoadingIndicator'
        )
      );
    }
    if (Component) {
      rendered.push(
        <ErrorBoundary key={'page'}>
          <Component {...this.props} />
        </ErrorBoundary>
      );
    }
    return rendered;
  }
}

class ErrorBoundary extends React.PureComponent<{}, { errored: boolean }> {
  state = {
      errored: false
  };
  componentDidCatch(err: Error, errInfo: React.ErrorInfo) {
    // 这里可以加上错误上报的逻辑
      this.setState({
          errored: true
      });
  }
  render() {
      if (this.state.errored) {
          return (
              <h1
                  style={{
                      textAlign: 'center',
                      marginTop: '8em',
                      fontSize: '100%',
                      color: '#aaa'
                  }}
              >
                  加载失败, 请联系开发人员
              </h1>
          );
      }
      return this.props.children;
  }
}
