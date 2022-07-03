window.onload = function () {
    function check(s) {
        var PersianOrASCII = /[آ-ی]|([a-zA-Z])/;
        if ((m = s.match(PersianOrASCII)) !== null) {
            if (m[1]) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    document.getElementById('active_button').ondblclick = function () {
        var id = chrome.runtime.id;
        chrome.management.get(id, function (ex) {
            if (ex.enabled) {
                chrome.management.setEnabled(id, false);
            }
        });
    }
    chrome.tabs.query({ //This method output active URL
        "active": true,
        "currentWindow": true,
        "status": "complete",
        "windowType": "normal"
    }, function (tabs) {
        for (tab in tabs) {
            if (check(tabs[tab].title)) {
                document.getElementById('url').style.direction = 'rtl';
            }
            document.getElementById('url').innerHTML = tabs[tab].title;
            if (tabs[tab].favIconUrl) {
                document.getElementById('favicon').src = tabs[tab].favIconUrl;
            }else{
                document.getElementById('favicon').src = 'domain.png';
            }
            document.getElementById('address').innerHTML = tabs[tab].url.split('/')[2];
        }
    });
}

