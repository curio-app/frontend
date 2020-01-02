import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://curi0.herokuapp.com/auth/login', user)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input type="email" value={user.email} onChange={handleChanges} name="email" />
        </label>
        <label htmlFor="password">
          <input type="password" value={user.password} onChange={handleChanges} name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
