import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function SideBar() {

    const recentItem = function(topic) {
        return(
            <div className="sidebar_recentItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p> 
            </div>
        );
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://timelinecovers.pro/facebook-cover/download/simple-background-that-can-be-texted-facebook-cover.jpg" alt="" />
                <Avatar className="sidebar_avatar" />
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
                    <p>Views on your post</p>
                    <p className="sidebar_statnumber">
                        2,569
                    </p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("React")}
                {recentItem("Angular")}
                {recentItem("FAANG")}
                {recentItem("AWS")}
                {recentItem("Software Engineering")}
            </div>
        </div>
    )
}

export default SideBar
