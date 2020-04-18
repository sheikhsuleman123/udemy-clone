import React from 'react';
import './css/props.css';
import './css/App.css';
// Screens
import Header from './screens/header';
import Sidebar from './screens/Sidebar';
import Home from './screens/home';
import Rightbar from './screens/rightbar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <Home />
      </div>
      <Rightbar />
    </div>
  );
}

export default App;
