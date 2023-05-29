const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400
  });

  // 加载本地文件
  win.loadFile('index.html');

  // 打开开发者工具
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  console.log('getAppPath:', app.getAppPath());
  console.log('getPath:', {
    desktop: app.getPath('desktop'),
    temp: app.getPath('temp'),
    documents: app.getPath('documents'),
    downloads: app.getPath('downloads'),
    music: app.getPath('music'),
    pictures: app.getPath('pictures'),
    videos: app.getPath('videos'),
    recent: app.getPath('recent')
  });
  createWindow();
});

// webContents被创建时触发
app.on('web-contents-created', () => {
  console.log('web-contents-created');
});

// 窗口被创建时触发
app.on('browser-window-created', () => {
  console.log('browser-window-created');
});

// 关闭窗口前触发,应用程序默认将退出
app.on('before-quit', (event) => {
  // event.preventDefault();
  console.log('before-quit');
});

// 关闭窗口后触发,应用程序默认将退出
app.on('will-quit', (event) => {
  // event.preventDefault();
  console.log('will-quit');
});

// 应用程序退出时触发
app.on('quit', () => {
  console.log('quit');
});

// 窗口从获得焦点到失去焦点时触发
app.on('browser-window-blur', () => {
  console.log('browser-window-blur');
  // 关闭窗口,会依次触发before-will,will-quit,quit
  // app.quit();
  // 程序退出,会直接触发quit,不会触发before-will和will
  // app.exit();
});

// 窗口从失去焦点到获得焦点时触发
app.on('browser-window-focus', () => {
  console.log('browser-window-focus');
});
