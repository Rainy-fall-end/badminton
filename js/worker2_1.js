const heartInteral = 1000;
var date = "周三";
const loaction = "嘉定体育中心羽毛球场地";
const time = "18";
const partner = "2330397";
const Status = {
    noPlace : 0,
    noDate : 1,
    noTime : 2,
    noReserve : 3,
    noInput : 4,
    noConfirm : 5
}
var statu = Status.noPlace;
var i = 1;
function getRandomTime()
{
    // 生成介于 3 和 5 之间的随机数（包括 3 和 5）
    var randomNumber = Math.random() * (5 - 3 + 1) + 3;
    randomNumber = Math.floor(randomNumber); // 可以使用 Math.floor() 来取整数部分
    if(randomNumber==3)
    {
        date = "周三";
    }
    if(randomNumber==4)
    {
        date = "周四";
    }
    if(randomNumber==5)
    {
        date = "周五";
    }
}
function updateStatus()
{
    if(!isPlaceSelected())
    {
        statu = Status.noPlace; 
        return;
    }
    if(!isTimeSelected())
    {
        statu = Status.noTime;
        return;
    }
    if(!isReserved())
    {
        statu = Status.noReserve;
        return;
    }
    if(!isInputWrote())
    {
        statu = Status.noInput;
        return;
    }
    statu = Status.noConfirm;
    return;
}
function scan()
{
    if(statu == Status.noPlace)
    {
        selectPlace(loaction,i);
        return;
    }
    selectPlace(loaction,i);
    if(statu == Status.noTime)
    {
        selectDate(date);
        selectTime(time);
        return;
    }
    if(statu == Status.noReserve)
    {
        confirmReserve("预约");
        return;
    }
    if(statu == Status.noInput)
    {
        writeInput(partner);
        return;
    }
    confirmReserve("确认预约");
}
function updateI()
{
    i++;
    if(i==6)
    {
        i=1;
    }
}
$(document).ready(function(){
    getRandomTime();
    console.log(date);
    setInterval(function(){
        updateStatus();
        scan();
        console.log(statu);
        updateI();
    },heartInteral);
    setTimeout(function(){
        location.reload();
    },60*1000);
});