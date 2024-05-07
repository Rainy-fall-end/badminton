console.log("begin")

function getButtonsByClass(className) {
    return $('button.' + className);
}

function getInputByClass(className) {
    return $('input.' + className);
}

function getDivByClass(className) {
    return $('div.' + className);
}

function getLabelByClass(className) {
    return  $('label.' + className);
}

function getObserver(element,func)
{
    let config = { attributes: true };
    var observer_ = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'style') {
                console.log("style change");
                func(); // 调用函数
            }
        });
    });
    observer_.observe(element, config);
}

function selectTime(time)
{
    // 12->17-18
    // 13->18-19
    // 14->19-20
    // 15->20-21
    // 获取指定的div元素
    var query = "#apointmentDetails > div.lists > div.chart > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > div > div.inner-seat-wrapper.clearfix > div:nth-child("+time+")";
var divElement = document.querySelector(query);
console.log(query);
console.log(divElement);
// 检查获取的div元素是否存在
if (divElement) {
    // 在获取的div元素下查找所有具有指定类的子元素
    var unselectedSeats = divElement.querySelectorAll(".inner-seat.unselected-seat");
    
    // 如果存在具有指定类的子元素，则进行进一步处理
    if (unselectedSeats.length > 0) {
        unselectedSeats[0].click();
    } else {
        console.log("在获取的div元素下没有找到class为inner-seat unselected-seat的子元素。");
    }
} else {
    console.log("未找到指定的div元素。");
}

}

function selectDate()
{
    // 获取当前本地时间
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    // 根据本地时间生成格式化的日期字符串，以便匹配id
    var formattedDate = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + ("0" + currentDate.getDate()).slice(-2);

    // 构建id选择器以获取对应日期的div元素
    var tabElement = document.getElementById("tab-"+formattedDate);
    var flag = 1;
    if(tabElement!=null)
    {
        tabElement.click();
        flag = 0;
    }
    else
    {
        // 获取当前时间
        var now = new Date();
        // 计算距离下一个整点的时间差
        var millisTillNextHour = 3600000 - now % 3600000;
        // 将时间差加上一个小时
        millisTillNextHour += 3600000;

        // 设置定时器，在下一个整点时刷新页面
        setTimeout(function() {
            console.log("定时刷新已设置,"+millisTillNextHour/60000+"分钟后刷新");
            if (flag == 1) {
                location.reload();
            }
        }, millisTillNextHour);
        setTimeout(function(){
            location.reload();
        },5000);
    }
}

function book() {
    let order = getButtonsByClass("el-button.fr.el-button--primary.is-round");
    order.click();
    document.addEventListener('mouseup', function(event) {
        setTimeout(function(){
            if(frame.style.zIndex=="")
            {
                let order = getButtonsByClass("el-button.fr.el-button--primary.is-round");
                order.click();
            }
        },500)
    });
}