chrome.storage.local.get(["time", "location"], function (items) {
    $("#time").val(items["time"] == null ? "" : items["time"]);
    $("#location").val(items["location"] == null ? "" : items["location"]);
});


//存储时间
$("#time").keyup(function () {
    chrome.storage.local.set({ "time": $("#time").val() });
});
// 储存场地
$("#location").keyup(function () {
    chrome.storage.local.set({ "location": $("#location").val() });
});