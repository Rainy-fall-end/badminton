$(window).on("load",setTimeout(function () {
    if(window.location.href.includes('apointmentDetails'))
    {
        chrome.storage.local.get(['time'], function(result) {

            console.log(result.time);
            let time = result.time==""? 13:result.time;
            selectDate();
            setTimeout(function(){
                // 12->17-18
                // 13->18-19
                // 14->19-20
                // 15->20-21
                selectTime(time);
                let agree = getLabelByClass("el-checkbox")[0];
                console.log(agree);
                let summit = getButtonsByClass("el-button.btnStyle.el-button--primary");
                // let frame = document.querySelector("#apointmentDetails > div.lists > div.chart > div.el-dialog__wrapper");
                agree.click();
                summit.click();
                setTimeout(function(){
                    summit.click();
                },200);
            },200);
        });
        
    }
}
,500));