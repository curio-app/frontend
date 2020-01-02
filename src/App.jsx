import React from 'react';
import './App.css';
import ProfilePageCard from './components/ProfilePageCard';

import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div className="App" role="main">
      <ProfilePageCard />
      <ProfilePage />
    </div>
  );
}

export default App;
