import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../Firebase/Firebase';

function Header() {

    const dispatch = useDispatch();

    const logoutFromApp = ()=>{
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            
            <div className="header_left">
                <img src= "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"  alt=""/>
                <div className="header_search">
                    {/* Search icon */}
                    <SearchIcon />
                    <input type="text" placeholder="search here"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Messaging"/>
                <HeaderOption Icon={ChatIcon} title="Chat"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption onClick={logoutFromApp} avatar="https://photos.app.goo.gl/no9hHhWaaKoKcMX58" title="Me"/>
            </div>
        </div>
    )
}

export default Header
