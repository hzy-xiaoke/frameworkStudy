const { app, BrowserWindow, Tray, Menu } = require('electron');

const createTray = (app, win) => {
  const tray = new Tray('./images/bell.png');
  // 悬停在图标上显示的文本
  tray.setToolTip('My Application');
  // 点击图标触发
  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show();
  });
  // 点击鼠标右键出现的菜单
  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: '切换显示/隐藏',
      click: () => {
        win.isVisible() ? win.hide() : win.show();
      }
    },
    {
      label: '退出',
      click: () => {
        app.quit();
      }
    }
  ]));
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400
  });

  // 打开本地文件
  win.loadFile('index.html');

  createTray(app, win);
};

app.whenReady().then(() => {
  createWindow();
});