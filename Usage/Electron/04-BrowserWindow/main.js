const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    // show: false,  // 窗口是否在创建时显示
    backgroundColor: '#3A4C74',
    // titleBarStyle: 'hidden',  // 窗口标题栏样式
    // titleBarOverlay: true,  // 与titleBarStyle: 'hidden'结合可实现无标题,但有窗口控件
  });
  win.menuBarVisible = false;  // 菜单栏是否可见

  const child = new BrowserWindow({
    width: 400,
    height: 400,
    parent: win,  // 指定父窗口
    // modal: true,  // 当前是否为模态窗口
    show: false,
  });

  win.loadURL('https://github.com');
  child.loadFile('index.html');

  // 当页面已经渲染完成(但是还没有显示)并且窗口可以被显示时触发
  win.on('ready-to-show', () => {
    win.show();

    child.on('ready-to-show', () => {
      child.show();
    });

    // 窗口关闭后触发
    child.on('closed', () => {
      // 窗口最大化
      win.maximize();
    });
  });

  // 点击鼠标右键触发
  child.webContents.on('context-menu', (e, params) => {
    child.webContents.executeJavaScript(`alert('${params.selectionText}')`);
  });
};

app.whenReady().then(() => {
  createWindow();
});
