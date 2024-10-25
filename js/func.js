
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

function reloadUrl(){
    // 获取当前时间
    var now = new Date();
    // 计算距离下一个整点的时间差
    var millisTillNextHour = 3600000 - now % 3600000;
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

function selectTime(time,location)
{
    // 12->17-18
    // 13->18-19
    // 14->19-20
    // 15->20-21
    var time_ = parseInt(time, 10) - 5;
    var query = "#apointmentDetails > div.lists > div.chart > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > div > div.inner-seat-wrapper.clearfix > div:nth-child("+ time_+")";
    var divElement = document.querySelector(query);
    var location_ = parseInt(location, 10)-1;
    console.log("location");
    console.log(location_)
    divElement = divElement.slice(0, 4);
    if (divElement) {
        var unselectedSeats = divElement.querySelectorAll(".inner-seat.unselected-seat");
        console.log(divElement);
        if (unselectedSeats.length <=  location_)
        {
            location_ = 0;
        }
        if (unselectedSeats.length > 0) {
            console.log(unselectedSeats);
            unselectedSeats[location_].click();
        } else {
            console.log("在获取的div元素下没有找到class为inner-seat unselected-seat的子元素。");
            reloadUrl()
        }
    } else {
        console.log("未找到指定的div元素。");
        selectTime(time-2,1);
        reloadUrl()
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
        reloadUrl()
    }
}
