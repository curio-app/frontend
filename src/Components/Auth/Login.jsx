import React from 'react';
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
export default Login;
