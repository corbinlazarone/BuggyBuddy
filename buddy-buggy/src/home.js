import React from "react";
import { useState, useEffect } from "react";

export default function UserLogIn() {

    const [cartUrl, setCartUrl] = useState('')

    useEffect(() => {
        // get cart url from chrome storage.
        chrome.storage.sync.get('dataValue', (data) => {
            setCartUrl(data.dataValue)
        })
    })

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <h3>Cart: {cartUrl}</h3>
        </div>
    );
}