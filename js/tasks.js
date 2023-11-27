
function selectPlace(location,i)
{
    let liElements = $("li.el-select-dropdown__item, li.el-select-dropdown__item.hover");
    place = location + i;
    liElements.each(function (index, element) {
        if($(element).find('span').text()==place)
        {
            $(element).find('span').click();
        }
    });
}
function selectDate(date)
{
    $("label:has(span:contains("+date+"))").click();
}
function selectTime(time)
{
    let labelElements = $("label");
    let timePattern = "\\s*" + time;
    let regex = new RegExp(timePattern);
    labelElements.each(function (index, label) {
    let matchingLabel = $(label).has('span').filter(function () {
        // 使用正则表达式测试 <span> 的文本
        return regex.test($(this).text())&&$(this).hasClass("el-radio is-bordered");
    });;
    if(matchingLabel.length>0)
    {
        matchingLabel.each(function(index,element){
            element.click();
        });
    }
});
}
function writeInput(partnerId)
{
    let inputElement = $('input[placeholder="请填写学/工号"]');
    //console.log(inputElement);
    inputElement.click();
    inputElement.val(partnerId);
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
//id1:预约
//id2:确认预约
function confirmReserve(id)
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
