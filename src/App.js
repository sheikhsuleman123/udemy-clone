import React from 'react';
import './css/props.css';
import './css/App.css';
// Screens
import Header from './screens/header';
import Sidebar from './screens/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
