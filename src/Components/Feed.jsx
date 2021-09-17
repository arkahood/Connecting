import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import SlideshowIcon from '@material-ui/icons/Slideshow';

function Feed() {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Image" color="green" />
                    <InputOption Icon={MovieCreationIcon} title="Videos" color="red" />
                    <InputOption Icon={ImageIcon} title="Event" color="purple"/>
                    <InputOption Icon={SlideshowIcon} title="Live" color="blue"/>
                </div>
            </div>
        </div>
    )
}

export default Feed;

