chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "get_tab_url") {
        if (sender.url && sender.url.includes('cart')) {
            chromeNotification()
            console.log(`Link: ${sender.url}`)
            sendResponse({ tabUrl: sender.url })

            // put cart url in chrome storage.
            chrome.storage.sync.set({ 'dataValue': sender.url })
        }
    }
})



const chromeNotification = () => {
    // Display a notification or take other actions as needed
    chrome.notifications.create({
        type: 'basic',
        iconUrl: './icons/notfiyIcon.png',
        title: 'Shopping Links Found',
        message: 'This website has things you can purchase!',
    });
}