import React, {useState, useEffect} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import Post from './Post';
import { db } from '../Firebase/Firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Feed() {

    const[input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id : doc.id,
                    data : doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e =>{
        e.preventDefault();
        db.collection('posts').add({
            name : user.displayName,
            description : user.email,
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => (setInput(e.target.value))} type="text" placeholder='write your post'/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Image" color="green" />
                    <InputOption Icon={MovieCreationIcon} title="Videos" color="red" />
                    <InputOption Icon={ImageIcon} title="Event" color="purple"/>
                    <InputOption Icon={SlideshowIcon} title="Live" color="blue"/>
                </div>
            </div>

            {/* {Posts} */}
            {posts.map(({id, data:{name, description, message}})=>(
                <Post
                key = {id}
                name= {name}
                description= {description}
                message= {message}/>
            ))}
            <Post 
            name='Arkajit'
            description='Description'
            message='message goes here' />

        </div>
    )
}

export default Feed;

