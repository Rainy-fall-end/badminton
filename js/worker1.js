$(document).ready(function () {
    window.onbeforeunload = function(event) {
        // 获取当前页面的 URL
        var currentUrl = window.location.href;
        
        if (currentUrl.includes('orderDetails')) {
            console.log('页面跳转到包含 apointmentDetails 的页面');
            let agree = document.querySelector("#orderDetails > div:nth-child(7) > div > div.el-dialog__footer > span > button.el-button.el-button--primary")
                let summit = getButtonsByClass("el-button.btnStyle.el-button--primary");
                console.log('window.location.href 发生了变化');
                console.log('新的 URL:', window.location.href);
                console.log("work");
                summit.click();
                agree.click();
        }
    };
    
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
                let agree = document.querySelector("#orderDetails > div:nth-child(7) > div > div.el-dialog__footer > span > button.el-button.el-button--primary")
                let summit = getButtonsByClass("el-button.btnStyle.el-button--primary");
                console.log('window.location.href 发生了变化');
                console.log('新的 URL:', window.location.href);
                console.log("work");
                summit.click();
                agree.click();
            }
        });
    });
    var config = { attributes: true, attributeFilter: ['href'] };
    observer.observe(document, config);
});