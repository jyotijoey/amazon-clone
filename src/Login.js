import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const signIn= e => {
        e.preventDefault();
        //firbasse login
    }

    const register= e => {
        e.preventDefault();
        //firebase register
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
                    <input type="password" value={password} onChange={p => setPassword(p.target.password)} />

                    <button type="submit" onClick={signIn} className="login_signInButton">
                    Sign In
                    </button>
                </form>

                <p>
                    By signing in you agree to Amazon Clone's Conditions of Use & Sale. 
                    PLease see our privacy notice, our cookies notice and our internet based ads notice for more info.
                </p>

                <button type="submit" onClick={register} className="login_registerButton">Create your Amazon Account</button>

        </div>
        </div>
        
    )
}

export default Login
