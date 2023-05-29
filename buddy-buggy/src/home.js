import React from "react";
import { useState, useEffect } from "react";
import logo from './icons/buggyBuddyCart.png'
import './css/Home.css'

export default function UserLogIn() {

    const [cartUrl, setCartUrl] = useState('')
    const [favicon, setFavicon] = useState('')
    const [carts, setCartData] = useState([]);
    const [idCounter, setIdCounter] = useState(1);

    useEffect(() => {
        // get cart url from chrome storage.
        chrome.storage.sync.get('dataValue', (data) => {
            setCartUrl(data.dataValue)
        })

        setFavicon(faviconURL(cartUrl))
        addObject(cartUrl, favicon)
    })

    // find favIcon.
    const faviconURL = (u) => {
        const url = new URL(chrome.runtime.getURL('_favicon/'))
        url.searchParams.set('pageUrl', u);
        url.searchParams.set('size', '16');
        return url.toString();
    }

    const addObject = (cartUrl, favicon) => {
        const newObject = {
            id: idCounter,
            url: cartUrl,
            favicon: favicon,
        }

        // Increase the ID counter for the next Object.
        setIdCounter(idCounter + 1);

        // Add the new Object to the array.
        setCartData([...carts, newObject])
    }

    // const shoppingCarts = [
    //     {
    //         id: 1,
    //         name: 'Amazon',
    //         url: 'https://www.amazon.com',
    //         favicon: 'https://www.amazon.com/favicon.ico',
    //     },
    //     {
    //         id: 2,
    //         name: 'eBay',
    //         url: 'https://www.ebay.com',
    //         favicon: 'https://www.ebay.com/favicon.ico',
    //     },
    //     {
    //         id: 3,
    //         name: 'Walmart',
    //         url: 'https://www.walmart.com',
    //         favicon: 'https://www.walmart.com/favicon.ico',
    //     },
    //     {
    //         id: 4,
    //         name: 'Target',
    //         url: 'https://www.target.com',
    //         favicon: 'https://www.target.com/favicon.ico',
    //     },
    //     {
    //         id: 5,
    //         name: 'Best Buy',
    //         url: 'https://www.bestbuy.com',
    //         favicon: 'https://www.bestbuy.com/favicon.ico',
    //     },
    //     {
    //         id: 6,
    //         name: 'Etsy',
    //         url: 'https://www.etsy.com',
    //         favicon: 'https://www.etsy.com/favicon.ico',
    //     },
    // ];
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const deleteCart = (id) => {
        const updatedCarts = carts.filter((cart) => cart.id !== id);
        setCartData(updatedCarts);
    };

    return (
        <div className="popup">
            <div className="buggy-logo">
                <img className='buggy-icon' src={logo} alt="fast car logo" />
            </div>
            <button className="edit-button" onClick={toggleEditMode}>
                {editMode ? 'Done' : 'Edit List'}
            </button>
            <div className="container">
                <div className="cart-list">
                    {carts.map((cart) => (
                        <div key={cart.id} className="cart-wrapper">
                            <a
                                href={cart.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cart-link"
                            >
                                <img src={cart.favicon} alt={cart.url} className="cart-favicon" />
                            </a>
                            {editMode && (
                                <button className="delete-button" onClick={() => deleteCart(cart.id)}>
                                    X
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};