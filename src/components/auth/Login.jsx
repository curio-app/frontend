import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Login = ({ history }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://curi0.herokuapp.com/auth/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        history.push('/');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="email">
        <input
          type="email"
          value={user.email}
          onChange={handleChanges}
          name="email"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          value={user.password}
          onChange={handleChanges}
          name="password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
