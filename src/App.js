import React from 'react';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app_body">
        {/* Side bar */}
        <SideBar />
        {/* Feed */}
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
