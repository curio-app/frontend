import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/auth/Login';
import './App.css';
import Register from './components/auth/Register';

import ProfilePage from './components/ProfilePage'
import UploadPage from './components/UploadPage';

function App() {
  return (
    <div className="App" role="main">
      <Route exact path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path='/profile' component={ProfilePage} />
      <Route path='/upload-page' component={UploadPage} />
    </div>

  );
}

export default App;
