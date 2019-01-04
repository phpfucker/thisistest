var btn = document.getElementById("btn");
var textarea = document.getElementById("domains");
var taburl = "";

// read settings from local storage
if (localStorage["domains"] != "undefined") {
    textarea.value = localStorage["domains"];
}

btn.addEventListener("click", function(){
    // save settings to local storage
    if (textarea.value != "undefined") {
        localStorage["domains"] = textarea.value;
    }
});

