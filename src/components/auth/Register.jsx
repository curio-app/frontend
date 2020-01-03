import React, { useState } from 'react';
import axios from 'axios';

const Register = props => {
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
      password: user.password
    };
    e.preventDefault();
    if (user.password === user.checkPassword) {
      axios
        .post('https://curi0.herokuapp.com/auth/register', userSend)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          // Change to reflect user profile page
          // props.history.push('/UserPage');
        })
        .catch(err => console.log(err.response));
      setUser({
        username: '',
        email: '',
        password: '',
        checkPassword: ''
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

export default Register;
