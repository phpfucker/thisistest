chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request == true) {
        var div = document.createElement("p");
        var msg = "<div id='thisistest_alert_area'> \
                    許可されていないページへアクセスしようとしています。 \
                   </div>"
        div.innerHTML = msg;
        document.body.prepend(div);
        var alert_area = document.getElementById('thisistest_alert_area');
        alert_area.style.background = "#FF0";
        alert_area.style.border = "#F00 2px solid";
        alert_area.style.width = "80%";
        alert_area.style.height = "128px";
        alert_area.style.margin = "10% auto";
        alert_area.style.display = "flex";
        alert_area.style.alignItems = "center";
        alert_area.style.justifyContent = "center";
    }
    sendResponse({});
});