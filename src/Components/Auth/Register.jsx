import React, { useState } from 'react';

const token = '324234234hnhkjnkjbnkj345bhiu34bh5kb23kj';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
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
      localStorage.setItem('token', token);
      console.log('SUCCESS!');
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChanges}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChanges}
          placeholder="Password"
        />
        <input
          type="password"
          value={user.checkPassword}
          onChange={handleChanges}
          placeholder="Verify Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
