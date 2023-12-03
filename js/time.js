function getPassTime(d)
{
    let laterTime = new Date();
    let timeDifference = laterTime.getTime() - d.getTime();
    return timeDifference/1000;
}

function isBusyTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (hours === 6 && minutes >= 0 && minutes <= 15) {
      return true;
    } else {
      return false;
    }
  }

function refresh()
{
  if(isBusyTime())
    {
        refreshTime = 15;
    }
    else
    {
        refreshTime = 60;
    }
    setTimeout(function(){
        //window.open('https://gym.tongji.edu.cn/Pc/#/stadium?id=8&stadium_item=', '_blank');
        location.reload();
        },refreshTime*1000);
}