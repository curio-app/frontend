import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/auth/Login';
import './App.css';
import Register from './Components/auth/Register';

function App() {
  return (
    <>
      <Route exact path="/register" component={Register} />
      <Route to="/login" component={Login} />
    </>
  );
}

export default App;
