const { app, globalShortcut } = require('electron');

app.whenReady().then(() => {
  // 注册快捷键
  globalShortcut.register('CommandOrControl+A', () => {
    console.log('CommandOrControl+A is pressed');
  });

  // 检查快捷键是否成功注册
  console.log(globalShortcut.isRegistered('CommandOrControl+A'));

  setTimeout(() => {
    // 注销快捷键
    globalShortcut.unregister('CommandOrControl+A');
  }, 2000);

  setTimeout(() => {
    console.log(globalShortcut.isRegistered('CommandOrControl+A'));
  }, 3000);
});
