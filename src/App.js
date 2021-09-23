import React ,{useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login';
import { auth } from './Firebase/Firebase';


function App() {
  
 const user = useSelector(selectUser);
 const dispatch = useDispatch();

 useEffect(() => {
   auth.onAuthStateChanged((userAuth)=>{
     if(userAuth){
        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
        }));
     }else{
        dispatch(logout());
     }
   })
 },[dispatch]);

  return (
    <div className="App">
      <Header />
      {console.log(user)}

      {(!user) ? <Login /> :
          (<div className="app_body">
            {/* Side bar */}
            <SideBar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
          </div>)
      }

    </div>
  );
}

export default App;
