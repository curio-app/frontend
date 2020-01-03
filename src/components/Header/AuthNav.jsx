import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthNav = ({ user }) => {
  const { push } = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    push('/');
    document.location.reload();
  };
  return (
    <nav className="auth-nav">
      <div>
        <h3>
          Welcome back,&nbsp;
          {user.username}
        </h3>
        <div>
          <Link to={`/profile/${user.username}`}>View Profile</Link>
          &nbsp;|&nbsp;
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
      <img src={user.imageUrl} alt="" />
    </nav>
  );
};

AuthNav.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default AuthNav;
