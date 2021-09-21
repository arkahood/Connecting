import React from 'react';
import './Login.css';

function Login() {

    const loginToApp = () => {};

    const register = () => {};

    return (
        <div className="login">
            <img src="https://www.amocrm.com/static/images/pages/integrations/logo/linkedin.png" alt="" />
            <form >
                <input type="text" placeholder="your name here..."/>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not an member?
                <span onClick={register}>Register Now</span>
            </p>
            
        </div>
    )
}

export default Login
