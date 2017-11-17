chrome.webRequest.onBeforeRequest.addListener(function(detail) {
    if (detail.url.indexOf("raw") === -1) {
        return {
            redirectUrl: detail.url + "/raw"
        };
    }
}, {
    urls: ["*://gyazo.com/*"]
}, ["blocking"]);