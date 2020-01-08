import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import axiosWithAuth from './components/auth/axiosWithAuth';
import { useUserDispatch } from './contexts/userContext';

import './App.css';

import Header from './components/Header';
import SingleItemPage from './components/SingleItemPage';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Upload from './components/Upload';
import EditItemPage from './components/EditItemPage';
import About from './components/About';

function App() {
  const dispatch = useUserDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const { data } = await axiosWithAuth().get('/auth/get-user-info');
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        console.log(error.response);
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App" role="main">
      <main className="content">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile/:username" component={ProfilePage} />
          <Route path="/upload-page" component={Upload} />
          <Route path="/edit" component={EditItemPage} />
          <Route path="/collectibles/:id" component={SingleItemPage} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
