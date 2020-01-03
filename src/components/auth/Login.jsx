import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.css';

const Login = ({ history }) => {
  const [user, setUser] = useState({
    username: '',
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
        localStorage.setItem('user', JSON.stringify(response.data));
        history.push('/');
        document.location.reload();
      })
      .catch(err => console.log(err.response));
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <main className="wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="input-container">
          <i className="far fa-user icon" />
          <input
            className="input-field"
            type="text"
            value={user.username}
            onChange={handleChanges}
            name="username"
            placeholder="Username"
          />
        </label>
        <label htmlFor="password" className="input-container">
          <i className="fas fa-lock icon" />
          <input
            className="input-field"
            type="password"
            value={user.password}
            onChange={handleChanges}
            name="password"
            placeholder="Password"
          />
        </label>
        <button className="registerButton" type="submit">
          Login
        </button>
      </form>
    </main>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
