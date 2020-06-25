import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export default (
  props: RouteComponentProps<{
    id?: string;
  }>
) => (
  <div
    style={{
      background: 'lightgoldenrodyellow'
    }}
  >
    <div>this is home page</div>
    {props.match.params.id ? (
      <a onClick={props.history.goBack}>go back!</a>
    ) : (
      <Link to={'/secondary/id'}>goto second page!</Link>
    )}
  </div>
);
