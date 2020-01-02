import React, { useState } from 'react';
import axios from 'axios';

<<<<<<< HEAD
const token = '324234234hnhkjnkjbnkj345bhiu34bh5kb23kj';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" />
        <input
          type="text"
          value={user.username}
          onChange={handleChanges}
          name="username"
        />
        <label htmlFor="password" />
      </form>
    </div>
  );
};

=======
const Login = props => {
  const [user, setUser] = useState({
    email: '',
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
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            value={user.email}
            onChange={handleChanges}
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            value={user.password}
            onChange={handleChanges}
            name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

>>>>>>> bbf840f57c5f6768ec482147ba3b58c5b9c21a3a
export default Login;
