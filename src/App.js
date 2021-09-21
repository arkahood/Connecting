import React from 'react';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';


function App() {
  
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header />

      {!user ?
        <Login /> :
        (
          <div className="app_body">
            {/* Side bar */}
            <SideBar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
          </div>
        )
      }

    </div>
  );
}

export default App;
