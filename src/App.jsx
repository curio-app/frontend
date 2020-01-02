import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/auth/Login';
import './App.css';
import Register from './components/auth/Register';

import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div className="App" role="main">
      <Route exact path="/register" component={Register} />
      <Route to="/login" component={Login} />
      <Route to='/profile' component={ProfilePage} />
    </div>
    
  );
}

export default App;
