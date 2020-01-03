import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
<<<<<<< HEAD
    render={props => {
      return localStorage.getItem('token') ? (
=======
<<<<<<< HEAD
    render={props =>
      localStorage.getItem('token') ? (
=======
    render={props => {
      return localStorage.getItem('token') ? (
>>>>>>> bbf840f57c5f6768ec482147ba3b58c5b9c21a3a
>>>>>>> bfde2c72ce05816f895f9e9d5b96772f381507eb
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
<<<<<<< HEAD
      );
    }}
=======
<<<<<<< HEAD
      )
    }
=======
      );
    }}
>>>>>>> bbf840f57c5f6768ec482147ba3b58c5b9c21a3a
>>>>>>> bfde2c72ce05816f895f9e9d5b96772f381507eb
  />
);

PrivateRoutes.propTypes = {
  component: PropTypes.element.isRequired,
  location: Redirect.propTypes.state.from.isRequired,
};

export default PrivateRoutes;
