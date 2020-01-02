import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

import Login from './components/auth/Login';
import Nav from './components/Nav';
import './App.css';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App" role="main">
      <Nav />
      <LandingPage />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
