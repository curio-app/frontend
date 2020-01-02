import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/auth/Login';
import './App.css';

function App() {
  return (
    <Route exact path="/login" component={Login} />
  );
}

export default App;
