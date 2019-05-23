import * as React from 'react';

import { routeStyles } from 'App';

export default class RoutePage extends React.PureComponent<{}, {}> {
  render() {
    return <div style={routeStyles}>{this.props.children}</div>;
  }
}
