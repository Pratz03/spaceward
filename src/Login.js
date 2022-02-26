import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {
        // google login 
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>

            <div className="login__logo">
                <img src="https://cdn.pixabay.com/photo/2021/11/01/13/17/login-6760338_960_720.png" alt="Login" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;