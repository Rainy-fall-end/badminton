chrome.storage.local.get(["time"],
    function (items) {
        $("#time").val(items["time"] == null ? "" : items["time"]);
    }
);

//存储时间
$("#time").keyup(function () {
    chrome.storage.local.set({ "time": $("#time").val() });
});
