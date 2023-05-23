
// send message to background script to get tab url.
let myTabUrl
chrome.runtime.sendMessage({ message: "get_tab_url" }, (rep) => {
    myTabUrl = rep.tabUrl
})