import React, { useState } from 'react';
import axiosWithAuth from './axiosWithAuth';

const token = 'response.data.token';

const icon = <i class="fas fa-user-plus"></i>;

const Register = props => {
  const [user, setUser] = useState({
    email: '',
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
    e.preventDefault();
    if (user.password === user.checkPassword) {
      axiosWithAuth()
        .post('auth/register', user)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          props.history.push('/UserPage');
        })
        .catch(err => console.log(err.response));
      console.log('SUCCESS!');
    }
  };
  return (
    <div id="wrapper">
      <h1>Register Here!</h1>
      <i>
        <i class="fas fa-user-plus"></i>
      </i>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
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

export default Register;
