const path = require('path');
const { app, BrowserWindow, ipcMain ,desktopCapturer  } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js'),
      sandbox: false,
      enableRemoteModule: true 
    }
  });

  // 加载本地文件
  win.loadFile('index.html');

  // 打开开发者工具
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  ipcMain.handle('capture-image', async () => {
    const sources = await desktopCapturer.getSources({
      types: ['window', 'screen']
    });
    return sources.map(source => {
      return {
        name: source.name,
        dataURL: source.thumbnail.resize({}).toDataURL()
      };
    })
  });

  ipcMain.handle('capture-video', async () => {
    const sources = await desktopCapturer.getSources({
      types: ['window', 'screen']
    });

    return sources.map(source => {
      return {
        sourceId: source.id,
        name: source.name
      };
    });
  });
  createWindow();
});

