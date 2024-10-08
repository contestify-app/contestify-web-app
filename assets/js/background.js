chrome.alarms.onAlarm.addListener(function (alarm) {
        console.log(alarm.name);
        chrome.tabs.create({
                active: true,
                url: alarm.name
        }, null);
});

chrome.notifications.onClicked.addListener(() => {
        console.log("Happen");
});

chrome.commands.onCommand.addListener((command) => {
        console.log(`Command "${command}" called`);
});

chrome.runtime.onInstalled.addListener(details => {
        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
                chrome.tabs.create({ url: 'https://contestify-app.vercel.app' });
                chrome.runtime.setUninstallURL(`https://contestify-app.vercel.app`);
        }
});