
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "get_tab_url") {
        if (sender.url && sender.url.includes('cart')) {
            chromeNotification()
            console.log(`Link: ${sender.url}`)
            sendResponse({ tabUrl: sender.url })

            // prompt user to add url to their buggy buddy.

        }
    }
})

let myNotificationID = null;

const chromeNotification = () => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: './icons/notfiyIcon.png',
        title: 'Shopping Links Found',
        message: 'This website has things you can purchase!',
        buttons: [{
            title: "Yes Add website to my Buggy Buddy!",
            iconUrl: "./icons/check_circle_FILL0_wght400_GRAD0_opsz48.png"
        }, {
            title: "No Not this Cart.",
            iconUrl: "./icons/cancel_FILL0_wght400_GRAD0_opsz48.png"
        }]
    }, (id) => {
        myNotificationID = id;
    });
}

// Responding to user clicking.
chrome.notifications.onButtonClicked.addListener((notificationId, buttonId) => {
    if (notificationId === myNotificationID) {
        if (buttonId === 0) {
            console.log("SORRY") 
        } else if (buttonId === 1) {
            console.log("SORRY")
        }
    }
})