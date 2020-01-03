import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

PrivateRoutes.propTypes = {
  component: PropTypes.element.isRequired,
  location: Redirect.propTypes.state.from.isRequired,
};

export default PrivateRoutes;
