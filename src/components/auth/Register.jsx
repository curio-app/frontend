import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axiosWithAuth from './axiosWithAuth';

const Register = ({ history }) => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    checkPassword: '',
  });
  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    const userSend = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    e.preventDefault();
    if (user.password === user.checkPassword) {
      axiosWithAuth()
        .post('auth/register', user)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          history.push('/UserPage');
        })
        .catch(err => console.log(err.response));
      setUser({
        username: '',
        email: '',
        password: '',
        checkPassword: '',
      });
    }
  };
  return (
    <div id="wrapper">
      <h1>Register Here!</h1>
      {/* <i>
        <i className="fas fa-user-plus" />
      </i> */}
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="username"
          value={user.username}
          onChange={handleChanges}
          placeholder="&#xf007; Username"
          required
        />
        <input
          className="input"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChanges}
          placeholder="&#xf0e0; Email"
          required
        />
        <input
          className="input"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChanges}
          placeholder="&#xf09c; Password"
          required
        />
        <input
          className="input"
          type="password"
          name="checkPassword"
          value={user.checkPassword}
          onChange={handleChanges}
          placeholder="&#xf023; Verify Password"
          required
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Register;
