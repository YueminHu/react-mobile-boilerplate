import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./style.module.less";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    // if you are using harmony modules ({modules:false})
    render(App);
    // in all other cases - re-require App manually
    // render(require("./App"));
  });
}
