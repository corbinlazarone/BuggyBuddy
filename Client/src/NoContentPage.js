import React from 'react';
import logo from "./icons/buggyBuddyCart.png"
import './css/NoContentPage.css';

export default function NoContentPage() {
    return (
        <div className="test-container">
            <h2 className="message">No carts to show!</h2>
            <img className="no-content-buggy-logo" src={logo} alt="upside down buggy-buddy" />
        </div>
    );
};
