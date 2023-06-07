import React, { useEffect, useState } from "react";
import logo from './icons/buggyBuddyCart.png'
import './css/userLogIn.css'

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate loading animation
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating an async operation

        // Perform login logic here
        // ...

        // Reset form and loading state
        setEmail('');
        setPassword('');
        setIsLoading(false);
    };

    return (
        <div className="login-container">
            <div className="bug-logo">
                <img className='bug-icon' src={logo} alt="fast car logo" />
            </div>
            <h2 className="login-title">Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button className="log-button" type="submit">Login</button>

                <p><em>Already a Member? Login</em></p>
            </form>
        </div>
    );
}