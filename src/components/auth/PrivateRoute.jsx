import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
<<<<<<< HEAD
    render={props =>
      localStorage.getItem('token') ? (
=======
    render={props => {
      return localStorage.getItem('token') ? (
>>>>>>> bbf840f57c5f6768ec482147ba3b58c5b9c21a3a
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
<<<<<<< HEAD
      )
    }
=======
      );
    }}
>>>>>>> bbf840f57c5f6768ec482147ba3b58c5b9c21a3a
  />
);

export default PrivateRoutes;
