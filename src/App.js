import React from 'react';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';

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
        <Feed />
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
