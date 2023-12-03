chrome.alarms.create('openTabsAlarm', {
    when: Date.now() + getTimeUntilNext6AM(5,59,0), // 设置定时器在下一个6点触发
    periodInMinutes: 24 * 60 // 每24小时触发一次
  });
chrome.alarms.create('openTabsAlarm', {
when: Date.now() + getTimeUntilNext6AM(6,1,0), // 设置定时器在下一个6点触发
periodInMinutes: 24 * 60 // 每24小时触发一次
});
  function getTimeUntilNext6AM(h,m,s) {
    const now = new Date();
    const next6AM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, s);
    if (next6AM <= now) {
      next6AM.setDate(next6AM.getDate() + 1); // 如果已经过了今天的6点，就设定为明天的6点
    }
    return next6AM.getTime() - now.getTime();
  }
  
  chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm && alarm.name === 'openTabsAlarm') {
        for(let i =0;i<7;++i)
        {
            chrome.tabs.create({ url: 'https://gym.tongji.edu.cn/Pc/#/stadium?id=8&stadium_item=' });
        }
      }
  });
  