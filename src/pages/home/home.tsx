import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';


export default (
  props: RouteComponentProps<{
    id?: string;
  }>
) => (
  <div>
    <p>this is home page</p>
    {props.match.params.id ? (
      <a onClick={props.history.goBack}>go back!</a>
    ) : (
      <Link to={'/secondary/id'}>goto second page!</Link>
    )}
  </div>
);
