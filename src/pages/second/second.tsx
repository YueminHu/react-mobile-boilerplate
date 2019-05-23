import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export default (props: RouteComponentProps<{ id: string }>) => (
  <div
    style={{
      height: '100%',
      background: 'lightblue'
    }}
  >
    <div>this is second page</div>
    <Link to={`/secondary/${props.match.params.id}/main`}>
      goto main page again!
    </Link>
  </div>
);
