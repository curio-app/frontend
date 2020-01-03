import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
        history.push('/');
      })
      .catch(err => console.log(err.response));
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <main id="wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="username">
          <input
            className="input"
            type="text"
            value={user.username}
            onChange={handleChanges}
            name="username"
            placeholder="&#xf007; Username"
          />
        </label>
        <label htmlFor="password" className="password">
          <input
            className="input"
            type="password"
            value={user.password}
            onChange={handleChanges}
            name="password"
            placeholder="&#xf023; Password"
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
