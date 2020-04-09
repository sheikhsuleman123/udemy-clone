import React from 'react';
import './css/props.css';
import './css/App.css';
// Screens
import Header from './screens/header';
import Sidebar from './screens/Sidebar';
import Home from './screens/home';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
