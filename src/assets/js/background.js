chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    var queryInfo = {
        active: true,
        windowId: chrome.windows.WINDOW_ID_CURRENT
    };

    // TODO: URLが複数設定されている場合用の分割とループ処理
    // if (tab.url != localStorage["domains"]) {
    var url = tab.url;
    var domain = localStorage["domains"];
    if (! url.match(domain)) {
        // TODO: すでにアラートが表示されていなければ
        chrome.tabs.query(queryInfo, function (result) {
            var currentTab = result.shift();
            var request = true;
        
            chrome.tabs.sendMessage(currentTab.id, request, function() {});
        });
    }
    else { alert("no"); }
});