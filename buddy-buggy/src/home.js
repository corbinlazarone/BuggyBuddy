import React from "react";
import { useState, useEffect } from "react";

export default function UserLogIn() {

    const [cartUrl, setCartUrl] = useState('')
    const [favicon, setFavicon] = useState('')

    useEffect(() => {
        // get cart url from chrome storage.
        chrome.storage.sync.get('dataValue', (data) => {
            setCartUrl(data.dataValue)
        })

        setFavicon(faviconURL(cartUrl))

    })

    const faviconURL = (u) => {
        const url = new URL(chrome.runtime.getURL('_favicon/'))
        url.searchParams.set('pageUrl', u);
        url.searchParams.set('size', '16');
        return url.toString();
    }

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <a href={cartUrl}>{cartUrl}</a>
            <img src={favicon} alt="icon" />
        </div>
    );
}