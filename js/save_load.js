function changeEnable(enable_)
{
    const button = document.getElementById('enable');
    if (enable_) {
        button.textContent = '关闭插件';
        button.classList.add('enabled');
        button.classList.remove('disabled');
    } else {
        button.textContent = '打开插件';
        button.classList.add('disabled');
        button.classList.remove('enabled');
    }
}

function togglePlugin() {
    chrome.storage.local.get(["enable"], function (items) {
        var enable_ = items["enable"];
        enable_ = !enable_;

        console.log("enable: " + enable_);
        changeEnable(enable_)
        chrome.storage.local.set({ "enable": enable_ });
    });
}

chrome.storage.local.get(["time", "location","enable"], function (items) {
    chrome.storage.local.set({"time":items["time"] == "" ? 15 : items["time"],
                            "location":items["location"] == "" ? 1 : items["location"],
                            "enable":items["enable"] == "" ? true : items["enable"]
    })
});
chrome.storage.local.get(["time", "location","enable"], function (items) {
    $("#time").val(items["time"]);
    $("#location").val(items["location"]);
    $("#enable").val(items["enable"]);
    changeEnable(items["enable"]);
});


//存储时间
$("#time").keyup(function () {
    chrome.storage.local.set({ "time": $("#time").val() });
});
// 储存场地
$("#location").keyup(function () {
    chrome.storage.local.set({ "location": $("#location").val() });
});

document.getElementById('enable').addEventListener('click', togglePlugin);