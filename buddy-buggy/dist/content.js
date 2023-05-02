// Search for shopping links on the website
const shoppingLinks = document.querySelectorAll('a[href*=shop], button.buy, button.add-to-cart');

// If there are shopping links, send a message to the background script
if (shoppingLinks.length > 0) {
    chrome.runtime.sendMessage({ hasShoppingLinks: true });
    console.log("shopping")
} else {
    console.log("no shopping links")
}