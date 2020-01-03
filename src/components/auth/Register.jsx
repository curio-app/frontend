import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Register = ({ history }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    checkPassword: '',
  });
  const handleChanges = e => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (user.password === user.checkPassword) {
      axios
        .post('https://curi0.herokuapp.com/auth/register', user)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          history.push('/UserPage');
        })
        .catch(err => console.log(err));
      console.log('SUCCESS!');
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChanges}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChanges}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={user.checkPassword}
          onChange={handleChanges}
          placeholder="Verify Password"
          required
        />
        <button type="submit">Register</button>
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
