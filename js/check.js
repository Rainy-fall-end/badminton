function isPlaceSelected()
{
    let liTag = $("i.el-input__icon.el-input__validateIcon.el-icon-circle-check");
    console.log("li+"+liTag.length);
    if(liTag.length>0)
    {
        return true;
    }
    return false;
}
function existValidTime()
{
    let labelTag = $("el-radio is-bordered");
    if(labelTag.length>0)
    {
        return true;
    }
    return false;
}
function isTimeSelected()
{
    let labelTag = $("label.el-radio.is-bordered.is-checked");
    console.log(labelTag);
    if(labelTag.length>1)
    {
        return true;
    }
    return false;
}
function isReserved()
{
    let inputTag = $('input[placeholder="请填写学/工号"]');
    if(inputTag.length>0)
    {
        return true;
    }
    return false;
}
function isInputWrote()
{
    let inputTag = $('input[placeholder="请填写学/工号"]');
    if(inputTag.val()!="")
    {
        return true;
    }
    return false;
}
console.log("hello?");