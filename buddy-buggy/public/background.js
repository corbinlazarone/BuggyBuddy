// /**
//  *  Listen to any new tabs being opend and prompt user
//  *  to add to Buggy Buddy.
//  */

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.hasShoppingLinks) {
        chromeNotfication();
        console.log("has shopping links");
    } else {
        console.log("has no shopping links")
    }
});

const chromeNotfication = () => {
    // Display a notification or take other actions as needed
    chrome.notifications.create(`my-notification-${Date.now()}`, {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Shopping Links Found',
        message: 'This website has things you can purchase!',
    });
}