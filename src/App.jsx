import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import SingleItemPage from './components/SingleItemPage';

import ProfilePage from './components/ProfilePage';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Upload from './components/Upload';
import EditItemPage from './components/EditItemPage';

function App() {
  return (
    <div className="App" role="main">
      <main className="content">
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/upload-page" component={Upload} />
          <Route path="/edit" component={EditItemPage} />
          <Route path="/collectibles/:id" component={SingleItemPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
