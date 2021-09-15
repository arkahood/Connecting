import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function SideBar() {
    return (
        <div className="Sidebar">
            <div className="sidebar_top">
                <img src="" alt="" />
                <Avatar />
                <h2>Arkajit Choudhury</h2>
                <h4>arlachoudhury@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who viwed you</p>
                    <p className="sidebar_statnumber">
                        2,569
                    </p>
                </div>
                <div className="sidebar_stat">
                    <p>who viwed you</p>
                    <p className="sidebar_statnumber">
                        2,569
                    </p>
                </div>
            </div>

            <div className="sidebar_bottom">
                
            </div>
        </div>
    )
}

export default SideBar
