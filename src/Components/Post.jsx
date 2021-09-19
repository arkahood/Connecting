import { Avatar } from '@material-ui/core';
import React from 'react'
import InputOption from './InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({name, description, message, photoUrl}) {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_button">
                <InputOption Icon={ThumbUpAltOutlinedIcon}
                title='Like' color='grey' />
                <InputOption Icon={ChatBubbleOutlineOutlinedIcon}
                title='comment' color='grey' />
                <InputOption Icon={ShareOutlinedIcon}
                title='share' color='grey' />
                <InputOption Icon={SendOutlinedIcon}
                title='send' color='grey' />
            </div>
        </div>
    )
}

export default Post
