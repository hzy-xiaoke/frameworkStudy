const path = require('path');
const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(__dirname, './preload.js'),
    }
  });

  const menu = Menu.buildFromTemplate([
    {
      label: '操作',
      submenu: [
        {
          click: () => {
            win.webContents.send('update-count', 1);
          },
          label: '+1'
        },
        {
          click: () => {
            win.webContents.send('update-count', -1);
          },
          label: '-1'
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);

  // 加载本地文件
  win.loadFile('index.html');

  // 打开开发者工具
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender;
    const senderWin = BrowserWindow.fromWebContents(webContents);
    senderWin.setTitle(title);
  });

  ipcMain.handle('open-file', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog();
    if (!canceled) {
      return filePaths[0];
    }
  });

  ipcMain.on('get-count', (event, count) => {
    console.log('count:', count);
  });

  createWindow();
});
