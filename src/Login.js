import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebox';
import "./Login.css";

function Login() {
    const history= useHistory();
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const signIn= e => {
        e.preventDefault();
        //firbase login
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message));
        
    }

    const register = e => {
        console.log("clicked");
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push("/");
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
        <Link to="/">
            <img className="login_logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>

                <form action="/login">

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={p => setPassword(p.target.value)} />

                    <button type="submit" onClick={signIn} className="login_signInButton">
                    Sign In
                    </button>
                </form>

                <p>
                    By signing in you agree to Amazon Clone's Conditions of Use & Sale. 
                    PLease see our privacy notice, our cookies notice and our internet based ads notice for more info.
                </p>

                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>

        </div>
        </div>
        
    )
}

export default Login
