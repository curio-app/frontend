import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useUserState } from '../../contexts/userContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { role } = useUserState();
  return (
    <Route
      {...rest}
      render={props => {
        return role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

AdminRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default AdminRoute;
