import * as React from "react";
import { RouteComponentProps } from "react-router";

import { routeStyles } from "App";
import { Link } from "react-router-dom";

interface Props extends RouteComponentProps {}

export default class Home extends React.PureComponent<Props, {}> {
  state = {};
  static getDerivedStateFromProps(props: Props) {
    console.log(props.location);
    return null;
  }
  render() {
    return (
      <div className={`main`} style={{ ...routeStyles, backgroundColor: "#fff" }}>
        home
        <Link to={"/second"}>to second</Link>
      </div>
    );
  }
}
