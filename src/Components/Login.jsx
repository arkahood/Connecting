import React, {useState} from 'react';
import './Login.css';
import {auth} from '../Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {

    const [name, setName] =  useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = (e) => {
        e.preventDefault();
        if(!name){
            return alert("Plz enter a full Name");
        }

        auth.createUserWithEmailAndPassword(email, password)
         .then((userAuth)=>{
             userAuth.user.updateProfile({
                 displayName : name,
             })
             .then(()=>{
                dispatch(login({
                    email : email,
                    uid : userAuth.user.uid,
                    displayName : name,
                }))
             })
         }).catch((error)=>alert(error));
         
    };

    return (
        <div className="login">
            <img src="https://www.amocrm.com/static/images/pages/integrations/logo/linkedin.png" alt="" />
            <form >
                <input type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder="your name here..."/>

                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not an member?
                <span onClick={register}>Register Now</span>
            </p>
            
        </div>
    )
}

export default Login
