import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
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
        // eslint-disable-next-line react/prop-types
        props.history.push('/');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="username">
            <h2 className="center-text">Login</h2>
            <input
              type="text"
              value={user.username}
              onChange={handleChanges}
              name="username"
            />
          </div>
          <div className="password">
            <input
              type="password"
              value={user.password}
              onChange={handleChanges}
              name="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
