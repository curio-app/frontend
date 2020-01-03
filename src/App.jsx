import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import UploadTwo from './components/UploadPage2';
import UploadThree from './components/UploadPage3';

import UploadOne from './components/UploadPage1';

import ProfilePage from './components/ProfilePage';

import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" role="main">
      <main className="content">
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route to="/login" component={Login} />
          <Route to="/profile" component={ProfilePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
