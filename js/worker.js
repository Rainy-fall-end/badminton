var _location_ = "嘉定体育中心羽毛球场地"; //嘉定体育中心羽毛球场地 嘉定校区网球场01
var _location = "";
var date = "周三";
var time = "18";
var partner = "2330397";
var i = 1;
function writeInput()
{
    var inputElement = $('input[placeholder="请填写学/工号"]');
    //console.log(inputElement);
    inputElement.click();
    inputElement.val("2330397");
    inputElement.click();
    let event = new Event('input', { bubbles: true });
    // hack React15
    event.simulated = true;
    // hack React16 内部定义了descriptor拦截value，此处重置状态
    let tracker = inputElement._valueTracker;
    if (tracker) {
    tracker.setValue(lastValue);
    }
    inputElement.focus();
    inputElement[0].dispatchEvent(event);
}
function getElementBySpan(id)
{
    // 获取所有按钮元素
    const buttons = document.querySelectorAll('button');
    //console.log(buttons);
    // 遍历按钮
    for (const button of buttons) {
    // 获取按钮内的 <span> 元素
    const span = button.querySelector('span');
    // 检查 <span> 中的文本是否包含特定文本
    if (span && span.innerText === id && button.className=="el-button el-button--primary") {
        // 找到了符合条件的按钮
        // 在这里执行你的操作
        //console.log('找到了包含特定文本的按钮:', button);
        button.click();
    }
    }
}

function selectPlace()
{
    var liElements = $("li.el-select-dropdown__item, li.el-select-dropdown__item.hover");
    // 遍历选中的 <li> 元素并打印它们
    //console.log(liElements);
    place = _location_ + i;
    //console.log(place); 
    liElements.each(function (index, element) {
        if($(element).find('span').text()==place)
        {
            $(element).find('span').click();
        }
    });
}

function reservePlace()
{
    getElementBySpan("预约");
    setTimeout(function(){
        writeInput();
        setInterval(function(){
            getElementBySpan("确认预约");
        },2000)
    },2000);
}

function clickPlaceSelect(className,placeHold)
{
    name = "input."+ className +"[placeholder='"+placeHold+"']";
    $(name).click();
    var liElements = $("li.el-select-dropdown__item, li.el-select-dropdown__item.hover");
    console.log(liElements);
    setTimeout(function(){
        if(liElements.length<=1)
    {
        console.log("点不开可选场地，1s后重新尝试");
        setTimeout(function(){
            clickPlaceSelect(className);
        },1000);
    }
    },200);
    
}
function getInputByAll(className,placeHold)
{
    clickPlaceSelect(className,placeHold);
    setInterval(function(){
        i++;
        if(i==6)
        {
            i=1;
        }
        selectPlace();
        $("label:has(span:contains("+date+"))").click();
        var labelElements = $("label");
        var timePattern = "\\s*" + time;
        var regex = new RegExp(timePattern);
        labelElements.each(function (index, label) {
        var matchingLabel = $(label).has('span').filter(function () {
            // 使用正则表达式测试 <span> 的文本
            return regex.test($(this).text())&&$(this).hasClass("el-radio is-bordered");
        });;
        //console.log(matchingLabel);
        if(matchingLabel.length>0)
        {
            matchingLabel.each(function(index,element){
                element.click();
            });
            setTimeout(function(){
                reservePlace();
            },300);
        }
        else
        {
            // setTimeout(function(){
            //     i++;
            //     if(i==6)
            //     {
            //         i=1;
            //     }
            //     getInputByAll(className,placeHold);
            // },2000);
        }
    });},5000);
}

$(document).ready(function () {
    setInterval(function(){
        location.reload();
    },5*30*1000);
    //console.log(_location);
    setTimeout(function(){
        getInputByAll("el-input_    _inner","请选择预约场地");
    },2000);
    
});
// $(document).ready(function () {
//     // 使用 .on() 方法来绑定点击事件
//     console.log("working");
//     $("#begin").on("click", function () {
//         console.log("working");
//         var text = "预约";
//         console.log(text);
//     });
// });