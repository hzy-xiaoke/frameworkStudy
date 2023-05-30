const { app, BrowserWindow, Menu } = require('electron');
const mainMenu = require('./mainMenu');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400
  });

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '保存',
      click: () => {
        console.log('保存');
      }
    },
    {
      label: '复制',
      click: () => {
        console.log('复制');
      }
    }
  ]);

  Menu.setApplicationMenu(mainMenu);

  // 加载本地文件
  win.loadFile('index.html');

  // 点击鼠标右键触发
  win.webContents.on('context-menu', () => {
    contextMenu.popup();
  });
};

app.whenReady().then(() => {
  createWindow()
});