import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './Components/Auth/Register';

function App() {
  return <Route exact path="/register" component={Register} />;
}

export default App;
