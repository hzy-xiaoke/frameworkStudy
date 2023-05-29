const { contextBridge, ipcRenderer } = require('electron');

const setTitle = (title) => {
  ipcRenderer.send('set-title', title);
};

const openFile = () => {
  return ipcRenderer.invoke('open-file');
};

const handleCount = (callback) => {
  ipcRenderer.on('update-count', callback);
};

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle,
  openFile,
  handleCount
});