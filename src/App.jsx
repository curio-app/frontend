import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/auth/Login';
import './App.css';
import Register from './components/auth/Register';

import ProfilePage from './components/ProfilePage'
import UploadPage from './components/UploadPage';
import UploadPage1 from './components/UploadPage1';
import UploadPage2 from './components/UploadPage2';
import UploadPage3 from './components/UploadPage3';


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
