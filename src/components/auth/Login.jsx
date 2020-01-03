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
    setUser({
      username: '',
      password: ''
    });
  };

  return (
    <div id="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="username">
          <h1>Login</h1>
          <input
            className="input"
            type="text"
            value={user.username}
            onChange={handleChanges}
            name="username"
            placeholder="&#xf007; Username"
          />
        </div>
        <div className="password">
          <input
            className="input"
            type="password"
            value={user.password}
            onChange={handleChanges}
            name="password"
            placeholder="&#xf023; Password"
          />
        </div>
        <button className="registerButton" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
