$(window).on("load",setTimeout(function () {
    if(window.location.href.includes('apointmentDetails'))
    {
        chrome.storage.local.get(['time','location','enable'], function(result) {
            if(result.enable)
            {
                let time = result.time==""? 13:result.time;
                let location = result.location==""? 0:result.location;
                selectDate();
                setTimeout(function(){
                    // 12->17-18
                    // 13->18-19
                    // 14->19-20
                    // 15->20-21
                    selectTime(time,location);
                    let agree = getLabelByClass("el-checkbox")[0];
                    // console.log(agree);
                    let summit = getButtonsByClass("el-button.btnStyle.el-button--primary");
                    agree.click();
                    summit.click();
                    setTimeout(function(){
                        summit.click();
                    },200);
                },200);
            }
        });
    }
}
,500));