var c= 0;
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {cancel: true};
    },
    {urls: ["*://*.mdn.net/*", "*://*.doubleclick.net/*", "*://*.ads.google.com/*", "*://*.carbonads.net/*", "*://*.outbrain.com/*", "*://*.click.digiato.com/*", "*://*.adblade.com/*", "*://*.adrecover.com/*", "*://*.adroll.com/*", "*://*.buysellads.com/*", "*://*.revcontent.com/*", "*://*.gemini.yahoo.com/*", "*://*.bidvertiser.com/*", "*://*.ads.microsoft.com/*", "*://*.ads.twitter.com/*", "*://*.ads.pinterest.com/*", "*://*.advertising.amazon.com/*", "*://*.kaprila.com/*", "*://biz1.varzeshe3.com/*", "*://biz.varzesh3.com/*", "*://biz-cdn.varzesh3.com/*", "*://*.sanjagh.com/*", "*://*.yektanet.com/*", "*://*.mediaad.org/*", "*://*.tapsell.ir/*", "*://*.sabavision.com/*", "*://*.clickyab.com/*", "*://*.bertina.ws/*", "*://*.adnegah.net/*", "*://*.afrak.com/*", "*://*.anetwork.ir/*"]},
    ["blocking"]
);
