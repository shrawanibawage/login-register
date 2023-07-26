import React, { useState } from "react";

export const Login = (props) => {
    const [Username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Username);
    }

    return (
        <div className="auth-form-container">
            <h2>Log-In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input value={Username} onChange={(e) => setUsername(e.target.value)}type="string" placeholder="Username" id="Username" name="Username" /><br/>
                <label htmlFor="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="********" id="Password" name="Password" /> <br/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}