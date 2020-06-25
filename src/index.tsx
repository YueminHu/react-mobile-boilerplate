import 'react-hot-loader';
import * as React from 'react';

// polyfill

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import * as ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';

import App from './App';
import './styles/style.less';
import { BrowserRouter as Router } from 'react-router-dom';

const render = Component => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    document.getElementById('root')
  );
};

render(App);
