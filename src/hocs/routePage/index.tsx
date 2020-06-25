import * as React from 'react';

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

export default class RoutePage extends React.PureComponent<{}, {}> {
  render() {
    return <div style={routeStyles}>{this.props.children}</div>;
  }
}
