import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/auth/Login';
import './App.css';
import Register from './components/auth/Register';

function App() {
  return (
    <>
      <Route exact path="/register" component={Register} />
      <Route to="/login" component={Login} />
    </>
  );
}

export default App;
