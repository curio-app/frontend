import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { useUserDispatch, useUserState } from '../../contexts/userContext';

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

  const dispatch = useUserDispatch();
  const { loggedIn } = useUserState();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    axios
      .post('https://curi0.herokuapp.com/auth/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      })
      .catch(err => console.log(err.response));
    setUser({
      username: '',
      password: '',
    });
  };

  useEffect(() => {
    if (loggedIn) history.push('/');
  }, [loggedIn, history]);

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
        <section className="login-buttons">
          <button className="registerButton" type="submit">
            Login
          </button>
          <p>
            &nbsp;or&nbsp;
            <button
              type="submit"
              onClick={() => history.push('/register')}
              className="registerButton"
            >
              Register
            </button>
            &nbsp; a new account.
          </p>
        </section>
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
