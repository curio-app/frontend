import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/auth/Login';
import './App.css';
import Register from './Components/auth/Register';

function App() {
  return (
<<<<<<< HEAD
    <>
      <Route exact path="/register" component={Register} />
      <Route to="/login" component={Login} />
    </>
=======
    <Route exact path="/login" component={Login} />
>>>>>>> Login
  );
}

export default App;
