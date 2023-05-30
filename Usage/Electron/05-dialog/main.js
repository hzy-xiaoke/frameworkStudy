const path = require('path');
const { app, BrowserWindow, ipcMain, dialog } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(__dirname, './preload.js')
    }
  });

  // 加载本地文件
  win.loadFile('index.html');

  // 打开开发者工具
  win.webContents.openDevTools();
};


app.whenReady().then(() => {
  ipcMain.handle('openDialog', () => {
    return dialog.showOpenDialog({
      title: '选择文件',
      defaultPath: app.getPath('desktop'),
      buttonLabel: '选择',
      properties: ['multiSelections', 'openFile']
    });
  });

  ipcMain.handle('saveDialog', () => {
    return dialog.showSaveDialog({
      title: '保存文件',
      defaultPath: app.getPath('desktop'),
      buttonLabel: '保存',
    });
  });

  ipcMain.handle('messageBox', () => {
    return dialog.showMessageBox({
      title: '确定框',
      type: 'question',
      message: '是否确认?',
      buttons: ['是', '否'],
    });
  });

  createWindow();
});