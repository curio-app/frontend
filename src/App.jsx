import React from 'react';
import LandingPage from './components/LandingPage';
import { Route } from 'react-router-dom';

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
      <Route to="/login" component={Login} />
    </div>
  );
}

export default App;
