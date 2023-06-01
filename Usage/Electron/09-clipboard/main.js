const path = require('path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js'),
      sandbox: false
    }
  });

  // 加载本地文件
  win.loadFile('index.html');

  // 打开开发者工具
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});