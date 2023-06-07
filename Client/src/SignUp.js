import React, { useState } from "react";
import logo from './icons/buggyBuddyCart.png';
import './css/SignUp.css';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform sign-up logic here
        // ...

        // Reset form
        setUsername('');
        setPassword('');
    };

    return (
        <div className="signup-container">
            <div className="bug-logo">
                <img className='bug-icon' src={logo} alt="fast car logo" />
            </div>
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="signup-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
}
