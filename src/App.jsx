import React from 'react';
import './App.css';
import UploadTwo from './components/UploadPage2';
import UploadThree from './components/UploadPage3';

import UploadOne from './components/UploadPage1'

function App() {
  return (
    <div className="App" role="main">
      <UploadOne />
      <UploadTwo />
      <UploadThree />
    </div>
  );
}

export default App;
